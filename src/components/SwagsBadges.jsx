import { Tooltip } from 'antd'
import { motion } from 'framer-motion';

const SwagsBadges = () => {

  // Define animation variants for the elements
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='fle items-center justify-center flex-col overflow-hidden'>

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
                    className='flex flex-col items-center justify-center'
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
                    className='flex flex-col items-center justify-center'
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

            <div className='w-full flex items-center justify-center flex-wrap gap-10'>

                {/* 1st ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 2nd ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 3rd ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 4th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 5th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 6th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 7th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 8th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 9th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 10th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 11th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 12th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>

                {/* 13th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 14th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>


                {/* 15th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 16th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>


                {/* 17th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 18th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Google Arcade Swag</h3>
                    </div>
                </Tooltip>


                {/* 19th ToolTip - GFG Swag */}
                <Tooltip
                    title="On Successfully completed GFG 160 days challenge"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

                        {/* Sub Title */}
                        <h3 className='text-center'>Geeksforgeeks Swag</h3>
                    </div>
                </Tooltip>

                {/* 20th ToolTip - Google Arcade */}
                <Tooltip
                    title="Achieving Trooper status in Google Arcade-2025"
                    className='flex flex-col items-center justify-center'
                >   
                    <div className='flex flex-col gap-3'>

                        {/* Image */}
                        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-red-700 border-2 border-violet-600'></div>

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