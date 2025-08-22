import GitHubCalendar from 'react-github-calendar'
import { motion } from 'framer-motion';

const GithubContribution = () => {
  // Animation variants
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const calendarVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <div className="text-center mt-0 md:mt-10 w-full flex flex-col items-center justify-center gap-5 md:gap-10">
      
      {/* Heading Animation */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-12xl font-bold text-white hidden md:block"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Days I <span className="text-[#353334]">Code</span>
      </motion.h1>
      
      {/* Calendar Animation */}
      <motion.div
        variants={calendarVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <GitHubCalendar
          username="RahulScripted"
          colorScheme="dark"
          blockSize={15}
          blockMargin={5}
        />
      </motion.div>
      
    </div>
  );
};

export default GithubContribution;