import { caseStudies } from "@types/case-studies";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuBox, LuLayers, LuShield, LuCreditCard, LuRocket, LuSettings, LuGlobe } from "react-icons/lu";

const ArrowIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const getMetricIcon = (label, index) => {
  const iconClass = "w-5 h-5 text-stamp";
  const lowerLabel = label.toLowerCase();

  if (lowerLabel.includes("user")) return <HiOutlineUserGroup className={iconClass} />;
  if (lowerLabel.includes("workflow") || lowerLabel.includes("environment")) return <TbActivityHeartbeat className={iconClass} />;
  if (lowerLabel.includes("component") || lowerLabel.includes("architecture")) return <LuBox className={iconClass} />;
  if (lowerLabel.includes("product") || lowerLabel.includes("application")) return <LuLayers className={iconClass} />;
  if (lowerLabel.includes("security")) return <LuShield className={iconClass} />;
  if (lowerLabel.includes("payment")) return <LuCreditCard className={iconClass} />;

  const fallbacks = [<LuRocket className={iconClass} />, <LuSettings className={iconClass} />, <LuGlobe className={iconClass} />];
  return fallbacks[index % fallbacks.length];
};

const TemplateCards = () => {
  const navigate = useNavigate();

  return (
    <div className="group/container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          onClick={() => navigate(`/case-study/${study.id}`)}
          className="group bg-paper border border-rule rounded-lg overflow-hidden cursor-pointer flex flex-col transition-all duration-300 group-hover/container:scale-[0.97] group-hover/container:blur-[1px] hover:!scale-105 hover:!blur-none"
        >
          <div className="flex items-center p-[9px]">
            <div className="px-1">
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ff605c]" />
            </div>
            <div className="px-1">
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#ffbd44]" />
            </div>
            <div className="px-1">
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#00ca4e]" />
            </div>
          </div>

          <div className="p-5 relative overflow-hidden flex flex-col flex-1">
            <span className="absolute top-5 right-5 text-2xs font-mono text-ink-soft capitalize">
              Role: {study.role}
            </span>

            <p className="absolute top-0 left-2 text-[10rem] leading-none font-display font-bold text-stamp/5 select-none pointer-events-none">
              {study.number}
            </p>

            <h3 className="text-2xl font-display font-semibold text-ink mt-6 relative z-10">
              {study.title}
            </h3>
            <p className="text-sm font-text text-ink-soft mt-2 leading-relaxed relative z-10">
              {study.description}
            </p>

            <div className="flex-1" />

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 pt-4 border-t border-rule relative z-10">
              {study.sections.result.metrics.map((metric, idx) => (
                <div key={metric.label} className="flex items-center gap-2">
                  {getMetricIcon(metric.label, idx)}
                  <div>
                    <p className="text-sm font-display font-bold text-stamp">
                      {metric.value}
                    </p>
                    <p className="text-2xs font-text text-ink-soft">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4 text-stamp relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateCards;
