import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto flex flex-col items-center gap-3">
      <h2 className="text-xs sm:text-sm md:text-base text-white text-center font-medium flex items-center justify-center gap-2">
        Made By{" "}
        <span className="text-[#F46C38] font-semibold">Rahul Goswami</span>{" "}
        <img width={24} src={assets.Love} alt="Heart" /> | All Rights Reserved
      </h2>
    </div>
  );
};

export default Footer;
