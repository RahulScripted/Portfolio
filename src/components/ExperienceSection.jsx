import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const techStack = [
  'React.js', 'React 19', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit',
  'Tailwind CSS', 'Ant Design', 'Material UI', 'TipTap', 'Recharts', 'Chart.js',
  'Jest', 'Unit Testing', 'REST APIs', 'Git', 'GitHub', 'Postman', 'Figma', 'Agile Methodologies', "Forgejo", "Jira",
];

const projects = [
  {
    name: 'Customer App',
    bullets: [
      'Built and maintained 10+ reusable React.js components for core customer onboarding and loan management workflows, reducing UI inconsistencies and accelerating feature delivery.',
      'Optimized React component rendering and lazy-loaded non-critical assets, reducing initial page load time by 30% in high-transaction dashboard views.',
      'Implemented 3 new loan offer modules with finance-configurable eligibility logic, delivering personalized loan recommendations to 10,000+ active customers.',
    ],
  },
  {
    name: 'Template Manager App',
    bullets: [
      'Built a production-grade template management system using React 19, TypeScript, Redux Toolkit, TipTap, and Tailwind — enabling contract creation, editing, versioning, and publishing across multiple business teams.',
      'Developed a multi-page rich text editor with advanced formatting, tables, images, building blocks, variables, comments, and version restore, significantly reducing manual document preparation time.',
      'Implemented PDF export pipeline, role-based template lifecycle (Create → Draft → Publish), and a dynamic dashboard with filters, inline actions, and API-driven state synchronization.',
    ],
  },
  {
    name: 'Transaction App',
    bullets: [
      'Integrated QR-based invoice scanning using Invoice APIs, enabling automated data extraction for invoice workflows and reducing manual data entry errors in DDR and deferred payment processes.',
      'Implemented role-based authentication with dual verification options — Security Question/Answer or Time-based One-Time Password (TOTP) — allowing users to select their preferred second-factor authentication method.',
    ],
  },
];

function ExperienceSection() {
  return (
    <div className="w-full flex flex-col gap-10">
      <motion.h1
        className="text-5xl md:text-7xl lg:text-12xl font-bold text-white"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        EXPER<span className="text-[#353334]">IENCE</span>
      </motion.h1>

      <motion.div
        className="bg-[#1C1A19] rounded-lg p-5 md:p-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-lg md:text-xl font-semibold text-white">Junior Software Engineer</h3>
          <p className="text-xs text-[#F46C38] font-medium">June 2025 – Present</p>
        </div>
        <a
          href="https://mintifi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-1 text-sm text-gray-400 hover:text-[#F46C38] transition-colors"
        >
          Mintifi, Mumbai
          <img width={12} src={assets.arrow_right_up} alt="link" style={{ filter: 'brightness(0) invert(0.6)' }} />
        </a>

        {/* Project subsections */}
        <div className="mt-5 flex flex-col gap-5">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h4 className="text-sm md:text-base font-semibold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F46C38]" />
                {proj.name}
              </h4>
              <ul className="mt-2 flex flex-col gap-1.5 pl-4">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs md:text-sm text-gray-400 leading-relaxed relative pl-3 before:content-['–'] before:absolute before:left-0 before:text-gray-600">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-5 pt-4 border-t border-white/5">
          <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Tech Stack Used</h4>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((t) => (
              <span key={t} className="px-3 py-1 text-[10px] md:text-xs text-gray-400 bg-white/5 rounded-full border border-white/5">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceSection;
