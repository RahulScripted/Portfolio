import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Tailwind CSS", "Ant Design", "Material UI", "TipTap", "Recharts"],
  },
  {
    label: "State & Data",
    items: ["Redux Toolkit", "TanStack Query", "REST APIs", "JWT", "TOTP", "RBAC"],
  },
  {
    label: "Testing",
    items: ["Jest", "React Testing Library", "Unit Testing"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "Postman", "Vercel", "Netlify", "Jira", "Forgejo"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-5 max-w-6xl mx-auto">
      {/* Section rule */}
      <div className="border-t-2 border-ink mb-1" />
      <div className="border-t border-rule mb-6" />

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-mono text-2xs uppercase tracking-widest text-stamp mb-2"
      >
        Case Notes · The Full Story
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-serif font-black text-ink text-3xl md:text-5xl mb-6"
      >
        Subject: Rahul Goswami
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
        {/* Bio */}
        <div>
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-base md:text-lg text-inkLight leading-relaxed mb-4"
          >
            Hi, I'm Rahul Goswami — a front-end developer driven by a passion for building clean,
            interactive, and user-friendly web interfaces. Currently working as a Junior Software
            Engineer (Frontend) at Mintifi, I bring a strong foundation in the MERN stack and a
            focus on crafting engaging digital experiences.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-base md:text-lg text-inkLight leading-relaxed"
          >
            I completed my B.Tech in Information Technology at Bankura Unnayani Institute of
            Engineering and have developed several projects emphasising scalable architecture,
            real-time interaction, and seamless UX. Gold Medalist in college sports, active
            open-source contributor (GSSOC 2024, Hacktoberfest 2024).
          </motion.p>
        </div>

        {/* Evidence card */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-rule p-5 bg-paper"
        >
          <p className="font-mono text-2xs uppercase tracking-widest text-stamp mb-3 border-b border-rule pb-2">
            Evidence on File
          </p>
          <ul className="space-y-2 font-mono text-xs text-inkLight">
            <li><span className="text-inkMuted">Role —</span> Junior Software Engineer</li>
            <li><span className="text-inkMuted">Employer —</span> Mintifi, Mumbai</li>
            <li><span className="text-inkMuted">Degree —</span> B.Tech IT, CGPA 8.29</li>
            <li><span className="text-inkMuted">Status —</span> <span className="text-stamp font-bold">Open to roles</span></li>
            <li><span className="text-inkMuted">Since —</span> June 2025</li>
          </ul>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-12 border-t border-rule pt-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-2xs uppercase tracking-widest text-inkMuted mb-6"
        >
          Confirmed Capabilities · Skill Inventory
        </motion.p>
        <div className="space-y-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              custom={gi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="font-mono text-2xs uppercase tracking-widest text-inkMuted mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-2xs uppercase tracking-wide px-2.5 py-1 border border-inkFaint text-inkLight hover:border-ink hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
