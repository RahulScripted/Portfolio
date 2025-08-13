import { Tooltip } from 'antd'
import { motion } from 'framer-motion';

const SwagsBadges = () => {

  // Define animation variants for the elements
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='fle items-center justify-center flex-col'>

        {/* Upper Part */}
        <div className='w-full flex flex-col items-center justify-center gap-12'>
           <motion.h1
                className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ Infinity }}
                >
                Swa
                <span className="text-[#353334]">gs</span>
            </motion.h1>

            <div className='w-full flex items-center justify-around'>

                {/* 1st ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[125px] h-[125px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 2nd ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[125px] h-[125px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>
            </div>
        </div>

        {/* Lower Part */}
        <div className='mt-20 w-full flex flex-col items-center justify-center gap-12'>
           <motion.h1
                className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ Infinity }}
                >
                Bad
                <span className="text-[#353334]">ges</span>
            </motion.h1>

            <div className='w-full flex items-center justify-around'>

                {/* 1st ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[125px] h-[125px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 2nd ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[125px] h-[125px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>
            </div>
        </div>
    </div>
  )
}

export default SwagsBadges