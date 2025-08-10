import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

function HomeElement() {
  return (
    <div className="w-full">

      {/* Text Part */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 0.8 }} // Animation duration
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold text-white">
          RAHUL <br className="max-lg:hidden" />
          <motion.span 
            className="text-[#353334]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            GOSWAMI
          </motion.span>
        </h1>

        {/* Paragraph */}
        <motion.p 
          className="text-md md:text-lg text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Passionate about creating intuitive and engaging <br className="max-md:hidden" />
          user experiences. Specialize in transforming ideas <br className="max-md:hidden" />
          into beautifully crafted products.
        </motion.p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="flex gap-10 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Experience */}
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold text-white">+0</h1>
          <h3 className="text-[#B0B0B0] font-semibold mt-2">Year Experience</h3>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold text-white">+5</h1>
          <h3 className="text-[#B0B0B0] font-semibold mt-2">Projects</h3>
        </div>
      </motion.div>

      {/* Achievement Section */}
      <div className="flex items-center justify-between gap-4 max-sm:flex-col md:flex-row md:justify-center">
        {/* 1st Card */}
        <motion.div 
          className="w-full h-[250px] bg-[#F46C38] pl-10 pt-10 pr-5 pb-10 flex flex-col rounded-md cursor-pointer relative md:w-1/2"
          style={{
            backgroundImage: `url(${assets.bg_one}), url(${assets.bg_one})`,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'top right, bottom left',
            backgroundRepeat: 'no-repeat,no-repeat',
            backgroundBlendMode: 'overlay',
          }}
          initial={{ opacity: 0, x: -50 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {/* Image */}
          <img width={30} src={assets.stack} alt="stack" />

          {/* Text on Card */}
          <h3 className="mt-5 text-2xl font-semibold">DYNAMIC, ANIMATION <br className="max-md:hidden" /> MOTION DESIGN</h3>
        </motion.div>

        {/* 2nd Card */}
        <motion.div 
          className="w-full h-[250px] bg-[#C5FF41] pl-10 pt-10 pr-5 pb-4 flex flex-col rounded-md cursor-pointer relative md:w-1/2"
          style={{
            backgroundImage: `url(${assets.bg_two}), url(${assets.bg_two})`,
            backgroundSize: '500px 500px',
            backgroundPosition: 'top right, bottom left',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundBlendMode: 'normal',
          }}
          initial={{ opacity: 0, x: 50 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {/* Image */}
          <img width={30} src={assets.layout} alt="layout" />

          {/* Text */}
          <h3 className="mt-5 text-black text-2xl font-semibold">Frontend Development </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeElement;