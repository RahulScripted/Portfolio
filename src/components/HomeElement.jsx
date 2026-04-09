import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function HomeElement() {
  const navigate = useNavigate();
  
  const startDate = new Date('2025-06-20'); 
  const now = new Date();

  const monthsDiff = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  const isMonths = monthsDiff < 12;
  const experienceValue = isMonths ? Math.max(monthsDiff, 1) : (Math.ceil((monthsDiff / 12) * 10) / 10).toFixed(1);
  const experienceLabel = isMonths ? (experienceValue === 1 ? 'Month Professional Experience' : 'Months Professional Experience') : 'Year Professional Experience';

  return (
    <div className="w-full">

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Open to work badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/40 border border-green-500/30 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs md:text-sm font-medium">Open to work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold text-white">
          RAHUL {" "}
          <motion.span 
            className="text-[#353334]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            GOSWAMI
          </motion.span>
        </h1>

        <motion.h2
          className="text-lg md:text-2xl text-[#F46C38] font-semibold mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frontend Developer specializing in React & Next.js
        </motion.h2>

        <motion.p 
          className="text-sm md:text-lg text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Detail-oriented Frontend Developer with a strong focus on crafting responsive, interactive, and performance-driven web applications. As a Junior Software Engineer at Mintifi, I contribute to building scalable fintech products using React, TypeScript, and Tailwind CSS, while ensuring clean architecture, reusable components, and efficient state management. I enjoy solving complex UI challenges and continuously improving user experience through modern frontend practices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href={assets.cv} download="Rahul_Goswami_Resume.pdf" target="_blank">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#F46C38] text-white rounded-lg font-semibold hover:bg-[#d05626] transition-all duration-300 cursor-pointer">
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
          </a>
          <button
            onClick={() => navigate('/arena')}
            className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-[#353334] hover:border-[#353334] transition-all duration-300 cursor-pointer"
          >
            Hire Me
            <img width={18} src={assets.arrow_white} alt="hire" />
          </button>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-start gap-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">{experienceValue}</h1>
          <h3 className="text-[#B0B0B0] text-center font-semibold mt-2">{experienceLabel}</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">+5</h1>
          <h3 className="text-[#B0B0B0] text-center font-semibold mt-2">Projects</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeElement;
