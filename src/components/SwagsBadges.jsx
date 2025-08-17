import { Modal, Tooltip } from 'antd'
import { motion } from 'framer-motion';
import  { assets } from '../assets/assets'
import { useState } from 'react';

const SwagsBadges = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

  const swags = [
    {
        id: 1,
        img: assets.GFG,
        title: "GeeksForGeeks Swag",
        description: "Completed 160 days challenge in GeeksForGeeks"
    },
    {
        id: 2,
        img: assets.Arcade,
        title: "Google Arcade Swag",
        description: "Achieving Arcade Trooper in Google Arcade"
    },
  ]

  const badges = [ 
    {
        id: 1,
        img: assets.Leetcode1,
        title: "50 days Badge",
        description: "Continuously solving 50 days Problems in Leetcode"
    },
    {
        id: 2,
        img: assets.Leetcode2,
        title: "October Leetcode Challenge",
        description: "Complete October Leetcode Challenge"
    },
    {
        id: 3,
        img: assets.Leetcode3,
        title: "November Leetcode Challenge",
        description: "Complete November Leetcode Challenge"
    },
    {
        id: 4,
        img: assets.Leetcode4,
        title: "Top Interview 150 Challenge",
        description: "Complete Top Interview 150 Leetcode Challenge"
    },
    {
        id: 5,
        img: assets.Leetcode5,
        title: "Leetcode 75 Challenge",
        description: "Complete Leetcode 75 Leetcode Challenge"
    },
    {
        id: 6,
        img: assets.Leetcode6,
        title: "Top 100 Liked Challenge",
        description: "Complete Top 100 Liked Leetcode Challenge"
    },
    {
        id: 7,
        img: assets.Leetcode7,
        title: "Top SQL 50 Challenge",
        description: "Complete Top SQL 50 Leetcode Challenge"
    },
    {
        id: 8,
        img: assets.Hacktoberfest0,
        title: "Register in Hacktoberfest",
        description: "Register as a contributor in Hacktoberfest"
    },
    {
        id: 9,
        img: assets.Hacktoberfest1,
        title: "Level 1 Badge in Hacktoberfest",
        description: "Achieving Level 1 Badge in Hacktoberfest"
    },
    {
        id: 10,
        img: assets.Hacktoberfest2,
        title: "Level 2 Badge in Hacktoberfest",
        description: "Achieving Level 2 Badge in Hacktoberfest"
    },
    {
        id: 11,
        img: assets.Hacktoberfest3,
        title: "Level 3 Badge in Hacktoberfest",
        description: "Achieving Level 3 Badge in Hacktoberfest"
    },
    {
        id: 12,
        img: assets.Hacktoberfest4,
        title: "Level 4 Badge in Hacktoberfest",
        description: "Achieving Level 4 Badge in Hacktoberfest"
    },
    {
        id: 13,
        img: assets.Postman,
        title: "Postman API Fundamentals",
        description: "Achieving Postman API Fundamentals Students Expert"
    },
    {
        id: 14,
        img: assets.GirlScript1,
        title: "Explorer Badge",
        description: "Open-source contribution in GirlScript Summer of Code"
    },
    {
        id: 15,
        img: assets.GirlScript2,
        title: "Adventurer Badge",
        description: "Open-source contribution in GirlScript Summer of Code"
    },
    {
        id: 16,
        img: assets.GirlScript3,
        title: "Champion Badge",
        description: "Open-source contribution in GirlScript Summer of Code"
    },
    {
        id: 17,
        img: assets.GirlScript4,
        title: "Summit Seeker Badge",
        description: "Open-source contribution in GirlScript Summer of Code"
    },
    
    {
        id: 18,
        img: assets.GirlScript5,
        title: "TrailBrazer Badge",
        description: "Open-source contribution in GirlScript Summer of Code"
    },
  ]

  // Define animation variants for the elements
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Define animation variants for the swags 
  const itemVariant = {
    hidden: { opacity: 0, x: -100 }, 
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.3, duration: 1.1, type: "easeOut" }
    })
    };

  // Show Image
  const showImage = (img) => {
    setSelectedImage(img)
    setIsOpen(true)
  }

  return (
    <div className='fle items-center justify-center flex-col overflow-hidden'>

        {/* Upper Part */}
        <div className='w-full flex flex-col items-center justify-center gap-12'>
           <motion.h1
                className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                Swa
                <span className="text-[#353334]">gs</span>
            </motion.h1>

            <div className='w-full flex flex-col sm:flex-row gap-10 items-center justify-around'>
                {swags.map((item,idx) => (
                    <motion.div
                        key={idx}
                        custom={idx}
                        variants={itemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Tooltip
                            title={item.description}
                            overlayInnerStyle={{ textAlign: "center" }} 
                            className='flex flex-col items-center justify-center'
                        >   
                            <div className='flex flex-col gap-3'>

                                {/* Image */}
                                <div className='flex items-center justify-center w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full border-4 border-violet-600 overflow-hidden'>
                                    <img src={item.img} alt="Image" className='w-full h-full object-cover cursor-pointer'  onClick={() => showImage(item.img)} />
                                </div>

                                {/* Sub Title */}
                                <h3 className='text-center'>{item.title}</h3>
                            </div>
                        </Tooltip>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Lower Part */}
        <div className='mt-20 w-full flex flex-col items-center justify-center gap-12'>
           <motion.h1
                className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                Bad
                <span className="text-[#353334]">ges</span>
            </motion.h1>
            
            <div className='w-full flex items-center justify-center flex-wrap gap-5 md:gap-10'>
                {badges.map((item,idx) => (
                    <motion.div
                        key={idx}
                        custom={idx}
                        variants={itemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Tooltip
                            title={item.description}
                            overlayInnerStyle={{ textAlign: "center" }} 
                            className='flex flex-col items-center justify-center'
                        >   
                            <div className='flex flex-col w-[125px] gap-3'>

                                {/* Image */}
                                <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full border-4 border-violet-600 overflow-hidden'>
                                    <img src={item.img} alt="Image" className='w-full h-full object-cover cursor-pointer'  onClick={() => showImage(item.img)} />
                                </div>

                                {/* Sub Title */}
                                <h3 className='text-center text-xs'>{item.title}</h3>
                            </div>
                        </Tooltip>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Show Image */}
        <Modal
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            className='w-[200px] rounded-full'
            footer={null}
        >
            {selectedImage && (
                <img src={selectedImage} alt="Swag" className="w-full p-5" />
            )}
        </Modal>
    </div>
  )
}

export default SwagsBadges