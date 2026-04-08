import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const certifications = [
  {
    title: 'Postman API Fundamentals — Student Expert',
    year: '2024',
    link: 'https://api.badgr.io/public/assertions/7Osw76MmTBOm1Hz2B-hzOQ?identity__email=goswami.rahul1002%40gmail.com',
  },
  {
    title: 'Hacktoberfest 2024 — All 4 Levels Cleared',
    year: '2024',
    link: 'https://www.holopin.io/@goswami2001#badges',
  },
  {
    title: 'GirlScript Summer of Code (GSSOC-Extd) — Contributor',
    year: '2024',
    link: 'https://drive.google.com/file/d/1O1aFAY6CQt1awOZcAInvY_dErQgmFhlW/view?usp=drive_link',
  },
];

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function CertificationsSection() {
  return (
    <div className="w-full flex flex-col gap-8">
      <motion.h1
        className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-left"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        CERTIFI<span className="text-[#353334]">CATIONS</span>
      </motion.h1>

      <div className="flex flex-col gap-3">
        {certifications.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#1C1A19] rounded-lg px-5 py-3 hover:bg-[#252220] transition-colors group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="text-sm md:text-base text-white group-hover:text-[#F46C38] transition-colors">{cert.title}</span>
            <span className="text-xs text-[#F46C38] font-medium flex items-center gap-1.5">
              {cert.year}
              <img
                width={12}
                src={assets.arrow_right_up}
                alt="link"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(350deg)' }}
              />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;
