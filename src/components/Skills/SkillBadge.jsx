import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../../assets/assets';

const skillIconMap = {
  'C++': { icon: assets.cpp, color: '#111' },
  'JavaScript': { icon: assets.javascript, color: '#111' },
  'TypeScript': { icon: assets.TypeScript, color: '#111' },
  'SQL': { icon: assets.sql, color: '#111' },
  'React.js': { icon: assets.react, color: '#111' },
  'Next.js': { icon: assets.NextJs, color: '#111' },
  'Tailwind CSS': { icon: assets.tailwind, color: '#111' },
  'Ant Design': { icon: assets.antdesign, color: '#111' },
  'Material UI': { icon: assets.materialui, color: '#111' },
  'Git': { icon: assets.git, color: '#111' },
  'GitHub': { icon: assets.github_w, color: '#111' },
  'MySQL': { icon: assets.mysql, color: '#111' },
  'Vercel': { icon: assets.vercel, color: '#111' },
  'Postman': { icon: assets.postman, color: '#111' },
  'GSAP': { icon: assets.gsapIcon, color: '#111' },
  'Framer Motion': { icon: assets.framermotion, color: '#111' },
  'Figma': { icon: assets.figma, color: '#111' },
  'Jest': { icon: assets.jest, color: '#111' },
  'Unit Testing': { icon: assets.jest, color: '#111' },
  'React Testing Library': { icon: assets.jest, color: '#111' },
  'React Native': { icon: assets.react, color: '#111' },
  'Redux Toolkit': { icon: assets.react, color: '#111' },
};

export default function SkillBadge({ skill, colorClass }) {
  const [hovered, setHovered] = useState(false);
  const data = skillIconMap[skill];

  return (
    <span
      className={`relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full border cursor-pointer ${colorClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && data && (
          <motion.div
            className="absolute bottom-full mb-1 pointer-events-none flex flex-col items-center"
            style={{ left: '50%', x: '-50%' }}
            initial={{ opacity: 0, y: 16, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            {/* Pin bubble */}
            <div
              className="rounded-full shadow-lg flex items-center justify-center"
              style={{ backgroundColor: data.color, width: 36, height: 36 }}
            >
              <img src={data.icon} alt={skill} className="object-contain" style={{ width: 22, height: 22 }} />
            </div>
            {/* Pin pointer triangle */}
            <div
              className="w-0 h-0 -mt-[1px]"
              style={{
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: `8px solid ${data.color}`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {skill}
    </span>
  );
}
