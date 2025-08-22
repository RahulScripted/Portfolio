import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import GithubContribution from './GithubContribution';

function AboutElement() {
  const rahulCV = './cv.pdf';

  // Define animation variants for the elements
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };


  const skillSet = [
    {
      id: 1,
      img: assets.cpp,
      title: "C++",
    },
    {
      id: 2,
      img: assets.html,
      title: "HTML",
    },{
      id: 3,
      img: assets.css,
      title: "CSS",
    },
    {
      id: 4,
      img: assets.javascript,
      title: "JavaScript",
    },
    {
      id: 5,
      img: assets.tailwind,
      title: "Tailwind CSS",
    },
    {
      id: 6,
      img: assets.TypeScript,
      title: "TypeScript",
    },
    {
      id: 7,
      img: assets.react,
      title: "React.js",
    },{
      id: 8,
      img: assets.NextJs,
      title: "Next.js",
    },
    {
      id: 9,
      img: assets.mysql,
      title: "My SQL",
    },
    {
      id: 10,
      img: assets.git,
      title: "GIT",
    },{
      id: 11,
      img: assets.github_w,
      title: "GitHub",
    },
  ]

  return (
    <div className='w-full flex flex-col gap-24'>
      {/* Text Part */}
      <div className='w-full flex flex-col gap-4'>
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          ABOUT
          <span className="text-[#353334]"> ME</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xs md:text-lg text-gray-400"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          Hi, I'm Rahul Goswami — a front-end developer driven by a passion for building clean, interactive, and user-friendly web interfaces. Currently working as a Junior Software Engineer (Frontend) at Mintifi, I bring a strong foundation in the MERN stack and a focus on crafting engaging digital experiences. I'm in the final year of my B.Tech in Information Technology at Bankura Unnayani Institute of Engineering, and have developed several full-stack projects, emphasizing scalable architecture, real-time interaction, and seamless UX.
        </motion.p>

        <a href={assets.cv} download={rahulCV.pdf} target='_blank'>
          <motion.button
            className='flex items-center justify-center gap-2 text-sm md:text-md border border-white px-3 md:px-5 py-1 md:py-2 rounded-md transition-all duration-500 cursor-pointer hover:bg-[#353334] hover:border-[#353334] group'
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ Infinity }}
          >
            <span>Download CV</span>
            <img
              className='transition-transform duration-500 group-hover:translate-x-2'
              width={20}
              src={assets.arrow_white}
              alt="arrow_white"
            />
          </motion.button>
        </a>
      </div>

      {/* Skills */}
      <div className='w-full items-center justify-center flex flex-col gap-10'>
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ Infinity }}
        >
          MY
          <span className="text-[#353334]"> SKILLS</span>
        </motion.h1>

        {/* Skill's Images */}
        <div className='w-full flex flex-wrap gap-10 text-center items-center justify-center md:items-start md:justify-start'>
          {skillSet.map((item,idx) => (
            <motion.div
              key={idx}
              className='flex flex-col cursor-pointer items-center justify-center gap-2'
              variants={skillVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ Infinity }}
            >
              <img className='hover:scale-110 duration-500 w-[50px] md:w-[70px]' src={item.img} alt="Image" />
              <p className='text-xs md:text-sm text-gray-400 font-semibold'>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      
      {/* Contribution */}
      <GithubContribution />
    </div>
  );
}

export default AboutElement;