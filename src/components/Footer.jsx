import Lottie from 'lottie-react';
import footerAnimation from '../assets/lottie files/footer.json';

const Footer = () => {
  return (
    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto flex flex-col items-center gap-2">
      <div className='absolute -top-16 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] pointer-events-none z-50'>
        <Lottie animationData={footerAnimation} loop />
      </div>
      <h2 className="text-xs sm:text-sm md:text-base text-white text-center font-medium">
        Made By{" "}
        <span className="text-[#F46C38] font-semibold">Rahul Goswami 🧡</span> |
        All Rights Reserved
      </h2>
    </div>
  );
};

export default Footer;
