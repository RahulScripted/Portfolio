import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const Footer = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const animationIdRef = useRef(null);

  const count = 8000; // Reduced for better performance on mobile

  useEffect(() => {
    init();
    
    return () => {
      // Cleanup
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && containerRef.current && rendererRef.current.domElement) {
        if (containerRef.current.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  const init = () => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Responsive camera setup
    const aspectRatio = window.innerWidth / window.innerHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    // Set renderer size with device pixel ratio for crisp rendering
    const pixelRatio = Math.min(window.devicePixelRatio, 2); // Limit to 2 for performance
    rendererRef.current.setPixelRatio(pixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setClearColor(0x000000, 1);
    
    // Center the canvas
    rendererRef.current.domElement.style.display = 'block';
    rendererRef.current.domElement.style.margin = '0 auto';
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Adjust camera position based on screen size
    const cameraZ = window.innerWidth < 768 ? 30 : 25;
    cameraRef.current.position.z = cameraZ;

    createParticles();
    
    // Automatically morph to "Rahul Goswami" after a short delay
    setTimeout(() => {
      morphToText("Rahul");
    }, 1000);

    animate();
  };

  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Adjust particle size based on screen size
    const particleSize = window.innerWidth < 768 ? 0.12 : 0.08;

    function sphericalDistribution(i) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Adjust sphere size based on screen
      const sphereSize = window.innerWidth < 768 ? 6 : 8;
      
      return {
        x: sphereSize * Math.cos(theta) * Math.sin(phi),
        y: sphereSize * Math.sin(theta) * Math.sin(phi),
        z: sphereSize * Math.cos(phi)
      };
    }

    for (let i = 0; i < count; i++) {
      const point = sphericalDistribution(i);
      
      positions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;

      const color = new THREE.Color();
      const depth = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z) / 8;
      color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    if (particlesRef.current) sceneRef.current.remove(particlesRef.current);
    particlesRef.current = new THREE.Points(geometry, material);
    particlesRef.current.rotation.x = 0;
    particlesRef.current.rotation.y = 0;
    particlesRef.current.rotation.z = 0;
    sceneRef.current.add(particlesRef.current);
  };

  const createTextPoints = (text) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Responsive font size
    const baseFontSize = window.innerWidth < 768 ? 60 : 100;
    const fontSize = window.innerWidth < 480 ? 40 : baseFontSize;
    const padding = 20;

    ctx.font = `bold ${fontSize}px Arial`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;

    canvas.width = textWidth + padding * 2;
    canvas.height = textHeight + padding * 2;

    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const points = [];
    const threshold = 128;

    // Adjust sampling rate for performance
    const sampleRate = window.innerWidth < 768 ? 0.2 : 0.3;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] > threshold) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor((i / 4) / canvas.width);
        
        if (Math.random() < sampleRate) {
          // Adjust scale based on screen size
          const scale = window.innerWidth < 768 ? (fontSize / 8) : (fontSize / 10);
          points.push({
            x: (x - canvas.width / 2) / scale,
            y: -(y - canvas.height / 2) / scale
          });
        }
      }
    }

    return points;
  };

  const morphToText = (text) => {
    if (!particlesRef.current) return;

    const textPoints = createTextPoints(text);
    const positions = particlesRef.current.geometry.attributes.position.array;
    const targetPositions = new Float32Array(count * 3);

    gsap.to(particlesRef.current.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5
    });

    for (let i = 0; i < count; i++) {
      if (i < textPoints.length) {
        targetPositions[i * 3] = textPoints[i].x;
        targetPositions[i * 3 + 1] = textPoints[i].y;
        targetPositions[i * 3 + 2] = 0;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 20 + 10;
        targetPositions[i * 3] = Math.cos(angle) * radius;
        targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
        targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
    }

    for (let i = 0; i < positions.length; i += 3) {
      gsap.to(particlesRef.current.geometry.attributes.position.array, {
        [i]: targetPositions[i],
        [i + 1]: targetPositions[i + 1],
        [i + 2]: targetPositions[i + 2],
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
      });
    }

    // Return to sphere after 6 seconds
    setTimeout(() => {
      morphToSphere();
    }, 6000);
  };

  const morphToSphere = () => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array;
    const targetPositions = new Float32Array(count * 3);
    const colors = particlesRef.current.geometry.attributes.color.array;

    function sphericalDistribution(i) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const sphereSize = window.innerWidth < 768 ? 6 : 8;
      
      return {
        x: sphereSize * Math.cos(theta) * Math.sin(phi),
        y: sphereSize * Math.sin(theta) * Math.sin(phi),
        z: sphereSize * Math.cos(phi)
      };
    }

    for (let i = 0; i < count; i++) {
      const point = sphericalDistribution(i);
      
      targetPositions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
      targetPositions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
      targetPositions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;

      const depth = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z) / 8;
      const color = new THREE.Color();
      color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    for (let i = 0; i < positions.length; i += 3) {
      gsap.to(particlesRef.current.geometry.attributes.position.array, {
        [i]: targetPositions[i],
        [i + 1]: targetPositions[i + 1],
        [i + 2]: targetPositions[i + 2],
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
      });
    }

    for (let i = 0; i < colors.length; i += 3) {
      gsap.to(particlesRef.current.geometry.attributes.color.array, {
        [i]: colors[i],
        [i + 1]: colors[i + 1],
        [i + 2]: colors[i + 2],
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          particlesRef.current.geometry.attributes.color.needsUpdate = true;
        }
      });
    }

    // Loop back to showing the name after sphere animation completes
    setTimeout(() => {
      morphToText("Rahul");
    }, 4000);
  };

  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
    }
    
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const handleResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update camera
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    // Update renderer with device pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    rendererRef.current.setPixelRatio(pixelRatio);
    rendererRef.current.setSize(width, height);

    // Adjust camera position for mobile
    const cameraZ = width < 768 ? 30 : 25;
    cameraRef.current.position.z = cameraZ;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Centered Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full absolute inset-0 flex items-center justify-center"
      />
      
      {/* Footer Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
          <h2 className="text-xs sm:text-sm md:text-base text-white text-center font-medium">
            Made By <span className="text-[#F46C38] font-semibold">Rahul Goswami 🧡</span> | All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;