import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { LuArrowLeft } from "react-icons/lu";
import maintenanceAnimation from "@assets/json-files/maintenance.json";

export default function Maintenance() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-paper min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full">
        <Player autoplay loop src={maintenanceAnimation} className="hidden md:block" style={{ width: "25%", height: "auto" }} />
      </div>
      <h1 className="-mt-16 text-2xl font-display font-semibold text-ink text-center">
        Under Maintenance
      </h1>
      <p className="text-sm font-text text-ink-soft mt-2 text-center max-w-sm">
        This case study is currently being worked on. Check back soon.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-5 py-2 text-sm font-mono border border-rule rounded hover:bg-ink hover:text-paper transition-colors"
      >
        <LuArrowLeft className="inline-block w-4 h-4 mr-1" /> Back to Home
      </button>
    </div>
  );
}
