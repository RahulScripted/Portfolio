import { motion } from "framer-motion";
import { settle } from "@animations";
import { LuCheck } from "react-icons/lu";
import { DesktopDiagram as TMDesktop, MobileDiagram as TMMobile } from "../diagrams/TemplateManagementDiagram";
import { DesktopDiagram as AIDesktop, MobileDiagram as AIMobile } from "../diagrams/AISaasDiagram";
import { DesktopDiagram as FTDesktop, MobileDiagram as FTMobile } from "../diagrams/FintechDiagram";
import { DesktopDiagram as FTMDesktop, MobileDiagram as FTMMobile } from "../diagrams/FintechModernizationDiagram";

// ─── Diagram selector by project ID ─────────────────────────────────────────

const diagramMap = {
  "template-management": { desktop: TMDesktop, mobile: TMMobile },
  "ai-powered-saas": { desktop: AIDesktop, mobile: AIMobile },
  "fintech-customer-platform": { desktop: FTDesktop, mobile: FTMobile },
  "fintech-modernization": { desktop: FTMDesktop, mobile: FTMMobile },
};

const ArchitectureDiagram = ({ studyId }) => {
  const diagrams = diagramMap[studyId];
  if (!diagrams) return null;

  const Desktop = diagrams.desktop;
  const Mobile = diagrams.mobile;

  return (
    <motion.div {...settle(0.2)} className="bg-paper border border-rule rounded-lg p-4 sm:p-5">
      <h4 className="font-display text-sm font-semibold text-ink mb-4">
        Solution Architecture
      </h4>
      <div className="hidden sm:block">
        <Desktop />
      </div>
      <div className="sm:hidden">
        <Mobile />
      </div>
    </motion.div>
  );
};

// ─── Engineering Decisions ───────────────────────────────────────────────────

const EngineeringDecisions = ({ decisions }) => (
  <motion.div {...settle(0.25)} className="bg-paper border border-rule rounded-lg p-4 sm:p-5">
    <h4 className="font-display text-sm font-semibold text-ink mb-4">
      Key Engineering Decisions
    </h4>
    <div className="space-y-3">
      {decisions.map((decision, idx) => (
        <motion.div
          key={idx}
          {...settle(0.25 + idx * 0.06)}
          className="flex items-start gap-2.5"
        >
          <div className="w-5 h-5 rounded bg-stamp/10 flex items-center justify-center shrink-0 mt-0.5">
            <LuCheck className="w-3 h-3 text-stamp" />
          </div>
          <div>
            <p className="font-text text-xs text-ink leading-tight font-semibold">
              {decision.question}
            </p>
            <p className="font-text text-2xs text-ink-soft leading-relaxed mt-0.5">
              {decision.answer}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ─── Build Section ───────────────────────────────────────────────────────────

export default function BuildSection({ data, stack, studyId }) {
  return (
    <div className="pt-2">
      <motion.div {...settle(0.1)} className="flex flex-wrap gap-2 mb-5">
        {stack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ArchitectureDiagram studyId={studyId} />
        <EngineeringDecisions decisions={data.engineeringDecisions} />
      </div>
    </div>
  );
}
