import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const techStack = [
  'React.js', 'React 19', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit',
  'TanStack Query', 'Tailwind CSS', 'Ant Design', 'Material UI', 'TipTap', 'Recharts', 'Chart.js',
  'Jest', 'React Testing Library', 'Unit Testing', 'REST APIs', 'JWT', 'TOTP', 'RBAC',
  'Git', 'GitHub', 'Postman', 'Figma', 'Agile Methodologies', 'Scrum', 'Forgejo', 'Jira',
];

const projects = [
  {
    name: 'Customer App',
    bullets: [
      'Shipped 10+ reusable React components powering customer onboarding and loan management workflows. Reduced dashboard load time by 30% through component memoization, code-splitting, lazy loading, and performance optimizations while maintaining test coverage using Jest and React Testing Library.',
      'Engineered 4 finance-configurable loan-offer modules with dynamic eligibility logic, delivering personalized product recommendations to 1,00,000+ active customers and enabling the business to test new lending criteria without engineering involvement.',
    ],
  },
  {
    name: 'Template Manager App',
    bullets: [
      'Delivered a greenfield contract-management platform from zero, now adopted by 7+ business teams processing 100+ financial documents per month — replacing a fully manual, error-prone preparation workflow.',
      'Developed a feature-rich document editor with tables, embedded media, dynamic variables, threaded comments, and version restoration; enabling enterprise-scale document management workflows across 7+ business teams.',
    ],
  },
  {
    name: 'AHS App',
    bullets: [
      'Built a General & Life Insurance module for in-journey sales across all loan products, with premium capture and LMS charge integration.',
      'Migrated legacy Customer 360 management to a structured, auditable system with activation/deactivation and RBAC.',
      'Shipped QR-based invoice scanning and dual-factor (Security Q&A + TOTP) authentication, cutting manual data-entry errors by ~40%.'
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
