import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "@types/case-studies";
import { settle } from "@animations";
import { ArrowLeftIcon } from "@animations";
import HeroSection from "./sections/HeroSection";
import QuestionSection from "./sections/QuestionSection";
import InvestigateSection from "./sections/InvestigateSection";
import DecideSection from "./sections/DecideSection";
import BuildSection from "./sections/BuildSection";
import ResultSection from "./sections/ResultSection";
import LearnSection from "./sections/LearnSection";
import TimelineConnector from "./components/TimelineConnector";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    navigate("/");
    return null;
  }

  const steps = [
    { number: "01", component: QuestionSection, props: { data: study.sections.question, question: study.question } },
    { number: "02", component: InvestigateSection, props: { data: study.sections.investigate } },
    { number: "03", component: DecideSection, props: { data: study.sections.decide } },
    { number: "04", component: BuildSection, props: { data: study.sections.build, stack: study.stack, studyId: study.id } },
    { number: "05", component: ResultSection, props: { data: study.sections.result } },
    { number: "06", component: LearnSection, props: { data: study.sections.learn } },
  ];

  return (
    <div className="bg-paper min-h-screen text-ink">
      {/* Header bar — same style as book-call */}
      <header className="border-b-4 border-ink px-5 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft hover:text-stamp transition-colors"
        >
          <ArrowLeftIcon size={14} /> Back to the Record
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft hidden sm:block">
          The Rahul Goswami Times | Case Study Desk
        </span>
      </header>

      {/* Hero */}
      <HeroSection study={study} />

      {/* Timeline Steps */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-20">
        {steps.map((step, idx) => {
          const StepComponent = step.component;
          return (
            <div key={step.number} className="relative">
              <div className="flex gap-6 sm:gap-10">
                {/* Timeline left column */}
                <TimelineConnector number={step.number} isLast={idx === steps.length - 1} />

                {/* Content right column */}
                <div className="flex-1 pb-16 sm:pb-20">
                  <StepComponent {...step.props} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer quote */}
      <motion.div {...settle(0.1)} className="text-center pb-16 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stamp">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <p className="font-mono text-xs text-ink-soft tracking-wide">
            Every project teaches me something new.
          </p>
        </div>
        <p className="font-text text-sm text-ink-soft">
          The goal is simple: build things that are useful, usable and scalable.
        </p>
      </motion.div>
    </div>
  );
}
