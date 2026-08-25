import { useState, useEffect } from "react";
import DesktopLoader from "./desktop";
import MobileLoader from "./mobile";

export default function Loader({ onComplete }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileLoader onComplete={onComplete} />;
  }

  return <DesktopLoader onComplete={onComplete} />;
}
