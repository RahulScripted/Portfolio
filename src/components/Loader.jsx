import { assets } from '../assets/assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-3xl">
      <img 
        src={assets.Loader} 
        alt="Loading..." 
        className="w-64"
      />
    </div>
  );
};

export default Loader;