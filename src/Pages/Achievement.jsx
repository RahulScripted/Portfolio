import { motion } from 'framer-motion';
import Cards from '../components/Cards';


const Achievement = () => {
  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row p-5 lg:p-10 gap-10'>

      {/* Left Part */}
      <motion.div 
        className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <Cards />
      </motion.div>
    </div>
  )
}

export default Achievement