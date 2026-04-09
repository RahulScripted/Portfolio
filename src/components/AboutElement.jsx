import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import SkillBadge from './Skills/SkillBadge';

function AboutElement() {
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const skillCategories = [
    {
      label: 'Languages',
      skills: ['C++', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      label: 'Frameworks & Libraries',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Ant Design', 'Material UI'],
    },
    {
      label: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'MySQL', 'Vercel', 'Postman'],
    },
    {
      label: 'Design & Animation',
      skills: ['GSAP', 'Framer Motion', 'Figma'],
    },
  ];

  const categoryColors = {
    Languages: 'bg-[rgba(59,130,246,0.15)] text-blue-400 border-[rgba(59,130,246,0.2)]',
    'Frameworks & Libraries': 'bg-[rgba(168,85,247,0.15)] text-purple-400 border-[rgba(168,85,247,0.2)]',
    'Tools & Platforms': 'bg-[rgba(16,185,129,0.15)] text-emerald-400 border-[rgba(16,185,129,0.2)]',
    'Design & Animation': 'bg-[rgba(244,108,56,0.15)] text-[#F46C38] border-[rgba(244,108,56,0.2)]',
  };

  return (
    <div className='w-full flex flex-col gap-24'>
      {/* About */}
      <div className='w-full flex flex-col gap-4'>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ABOUT
          <span className="text-[#353334]"> ME</span>
        </motion.h1>

        <motion.p
          className="text-xs md:text-lg text-gray-400"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hi, I'm Rahul Goswami — a front-end developer driven by a passion for building clean, interactive, and user-friendly web interfaces. Currently working as a Junior Software Engineer (Frontend) at Mintifi, I bring a strong foundation in the MERN stack and a focus on crafting engaging digital experiences. I completed my B.Tech in Information Technology at Bankura Unnayani Institute of Engineering, and have developed several projects emphasizing scalable architecture, real-time interaction, and seamless UX.
        </motion.p>
      </div>

      {/* Skills */}
      <div className='w-full flex flex-col gap-10'>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          MY<span className="text-[#353334]"> SKILLS</span>
        </motion.h1>

        <div className='flex flex-col gap-6'>
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='text-sm md:text-base text-gray-500 font-semibold mb-3 uppercase tracking-wider'>{cat.label}</h3>
              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    colorClass={categoryColors[cat.label]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className='w-full flex flex-col gap-10'>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          EDU<span className="text-[#353334]">CATION</span>
        </motion.h1>

        <motion.div
          className='bg-[#1C1A19] rounded-lg p-5 md:p-6'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
            <h3 className='text-lg md:text-xl font-semibold text-white'>Bachelor's Degree in Information Technology</h3>
            <p className='text-xs text-[#F46C38] font-medium'>Aug 2022 – Jun 2025</p>
          </div>
          <a
            href="https://www.buie.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center gap-1.5 mt-1 text-sm text-gray-400 hover:text-[#F46C38] transition-colors'
          >
            Bankura Unnayani Institute of Engineering
            <img width={12} src={assets.arrow_right_up} alt="link" style={{ filter: 'brightness(0) invert(0.6)' }} />
          </a>
          <p className='text-xs text-gray-500 mt-0.5'>Bankura, West Bengal, India</p>
          <div className='flex items-center gap-4 mt-2'>
            <p className='text-xs text-emerald-400 font-medium'>CGPA: 8.24 / 10</p>
          </div>

          <div className='mt-4 pt-4 border-t border-white/5'>
            <h4 className='text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2'>Relevant Coursework</h4>
            <div className='flex flex-wrap gap-1.5'>
              {['Data Structures & Algorithms', 'Database Management', 'Operating Systems', 'Computer Networks', 'Web Development'].map((c) => (
                <span key={c} className='px-3 py-1 text-[10px] md:text-xs text-gray-400 bg-white/5 rounded-full border border-white/5'>{c}</span>
              ))}
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-white/5'>
            <h4 className='text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2'>Extracurricular</h4>
            <ul className='flex flex-col gap-1'>
              <li className='text-xs text-gray-400 leading-relaxed pl-3 relative before:content-["–"] before:absolute before:left-0 before:text-gray-600'>
                Gold Medalist, College Sports Fest — Secured first place in Long Jump and won a gold medal in Volleyball.
              </li>
              <li className='text-xs text-gray-400 leading-relaxed pl-3 relative before:content-["–"] before:absolute before:left-0 before:text-gray-600'>
                Active open-source contributor — GSSOC 2024 (6 badges), Hacktoberfest 2024 (all 4 levels).
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutElement;
