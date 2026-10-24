import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

// Critical above-the-fold — loaded eagerly
import Loader from "@components/loader";
import Masthead from "@components/masthead";
import Nav from "@components/nav";
import Hero from "@components/hero";
import InfiniteRibbon from "@components/infinite-ribbon";

// Below-the-fold sections — lazy loaded
const Projects = lazy(() => import("@components/projects"));
const LabReport = lazy(() => import("@components/lab-report"));
const Career = lazy(() => import("@components/career"));
const Lighthouse = lazy(() => import("@components/lighthouse"));
const Education = lazy(() => import("@components/education"));
const Bounty = lazy(() => import("@components/bounty"));
const CaseStudies = lazy(() => import("@components/case-studies"));
const Contact = lazy(() => import("@components/contact"));
const Footer = lazy(() => import("@components/footer"));

// Separate route — lazy loaded
const BookCall = lazy(() => import("@components/book-call"));
const CaseStudyDetail = lazy(() => import("@components/case-studies/detail"));
const NotFound = lazy(() => import("@components/not-found"));
const Privacy = lazy(() => import("@components/legal/Privacy"));
const Terms = lazy(() => import("@components/legal/Terms"));

import CookieConsent from "@components/cookie-consent";

// Minimal fallback for lazy sections (invisible, no layout shift)
const SectionFallback = () => <div className="min-h-[200px]" />;

function DeferMount({ children, minHeight = 300, rootMargin = "400px" }) {
  const [node, setNode] = useState(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!node || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node, shown, rootMargin]);
  return (
    <div ref={setNode} style={shown ? undefined : { minHeight }}>
      {shown ? <Suspense fallback={<SectionFallback />}>{children}</Suspense> : null}
    </div>
  );
}

// Ink curtain that wipes in then out on every route change
const pageFade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
};

function PageTransition({ children }) {
  return (
    <motion.div key={useLocation().pathname} {...pageFade}>
      {children}
    </motion.div>
  );
}

const RIBBON_PHRASES = [
  "Trace the problem | follow the decisions | uncover the solution",
  "Find the problem | inspect the system | uncover what shipped",
  "Every problem leaves clues | every decision tells a story | every product leaves evidence",
  "Investigate the problem | decode the system | uncover the build",
  "The case | the clues | the solution",
];

function MainSite() {
  const alreadySeen = !!sessionStorage.getItem("intro_seen");
  const [loaded, setLoaded] = useState(alreadySeen);
  const [canShowLoader, setCanShowLoader] = useState(false);
  useEffect(() => {
    if (alreadySeen) return;
    const id = requestAnimationFrame(() => setCanShowLoader(true));
    return () => cancelAnimationFrame(id);
  }, [alreadySeen]);
  const [ribbonPhrase] = useState(
    () => RIBBON_PHRASES[Math.floor(Math.random() * RIBBON_PHRASES.length)]
  );
  const [ribbonPhraseEnd] = useState(
    () => RIBBON_PHRASES[Math.floor(Math.random() * RIBBON_PHRASES.length)]
  );

  return (
    <>
      {!loaded && canShowLoader && <Loader onComplete={() => setLoaded(true)} />}
      <div className="bg-paper min-h-screen text-ink">
        <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
          <filter id="rough-stamp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.035 0.06" numOctaves="2" seed="7" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <Masthead />
        <Nav />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <div className="my-8">
            <InfiniteRibbon duration={32}>{ribbonPhrase}</InfiniteRibbon>
          </div>
          <Suspense fallback={<SectionFallback />}>
            <LabReport />
          </Suspense>
          <DeferMount minHeight={520}>
            <Lighthouse />
          </DeferMount>
          <div className="my-8">
            <InfiniteRibbon duration={32} reverse>{ribbonPhraseEnd}</InfiniteRibbon>
          </div>
          <DeferMount minHeight={400}>
            <Career />
          </DeferMount>
          <DeferMount minHeight={400}>
            <Education />
          </DeferMount>
          <DeferMount minHeight={600}>
            <Bounty />
          </DeferMount>
          <DeferMount minHeight={500}>
            <CaseStudies />
          </DeferMount>
          <DeferMount minHeight={400}>
            <Contact />
          </DeferMount>
          <DeferMount minHeight={300}>
            <Footer />
          </DeferMount>
        </main>
      </div>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><MainSite /></PageTransition>} />
          <Route
            path="/book-call"
            element={
              <Suspense fallback={<SectionFallback />}>
                <PageTransition><BookCall /></PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/case-study/:id"
            element={
              <Suspense fallback={<SectionFallback />}>
                <PageTransition><CaseStudyDetail /></PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<SectionFallback />}>
                <PageTransition><Privacy /></PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<SectionFallback />}>
                <PageTransition><Terms /></PageTransition>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<SectionFallback />}>
                <PageTransition><NotFound /></PageTransition>
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <>
      <AnimatedRoutes />
      <CookieConsent />
    </>
  );
}
