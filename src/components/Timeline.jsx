import { motion } from 'framer-motion';
import { timelineData } from '../assets/assets';

const Timeline = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold text-white mb-12 text-center">
        MY<span className="text-[#353334]"> WORKS</span>
      </h1>

      <div className='relative mx-auto w-full max-w-3xl'>
        {/* Vertical line */}
        <div className='absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#353334]' />

        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className={`relative flex items-start mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Icon dot */}
            <div className='absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1C1A19] border border-[#353334] flex items-center justify-center z-10'>
              <img width={20} src={event.img} alt='icon' />
            </div>

            {/* Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-32px)] ${index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
              <div className='bg-[#1C1A19] rounded-xl p-5 border border-[#353334]/50'>
                <h5 className='text-sm mb-2 font-medium text-gray-400'>{event.date}</h5>
                <h3 className='font-semibold text-md lg:text-lg text-white'>{event.title}</h3>
                <p className='text-gray-400 text-sm mt-2 mb-4'>{event.description}</p>
                <a
                  href={event.btnLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-5 py-1 bg-[#1C1A19] cursor-pointer text-white rounded-full border border-[#353334] hover:bg-white hover:text-[#1C1A19] transition-all duration-500 text-sm'
                >
                  {event.btnText}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
