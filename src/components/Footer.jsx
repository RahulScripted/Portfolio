import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto flex flex-col items-center gap-3">
      {/* Social Links */}
      <div className='flex items-center gap-6'>
        <a href="https://www.linkedin.com/in/rahul-goswami-ba2b51232/" target='_blank' rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img width={22} style={{filter: 'brightness(0) invert(1)'}} src={assets.linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:goswami.rahul1002@gmail.com" className="hover:scale-110 transition-transform">
          <img width={22} style={{filter: 'brightness(0) invert(1)'}} src={assets.mail} alt="Email" />
        </a>
      </div>

      <h2 className="text-xs sm:text-sm md:text-base text-white text-center font-medium">
        Made By{" "}
        <span className="text-[#F46C38] font-semibold">Rahul Goswami</span> |
        All Rights Reserved
      </h2>
    </div>
  );
};

export default Footer;
