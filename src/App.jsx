import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

// Critical above-the-fold — loaded eagerly
import Loader from "@components/loader";
import Masthead from "@components/masthead";
import Nav from "@components/nav";
import Hero from "@components/hero";

// Below-the-fold sections — lazy loaded
const Projects = lazy(() => import("@components/projects"));
const LabReport = lazy(() => import("@components/lab-report"));
const Career = lazy(() => import("@components/career"));
const Philosophy = lazy(() => import("./components/philosophy"));
const Education = lazy(() => import("@components/education"));
const Bounty = lazy(() => import("@components/bounty"));
const Contact = lazy(() => import("@components/contact"));
const Footer = lazy(() => import("@components/footer"));

// Separate route — lazy loaded
const BookCall = lazy(() => import("@components/book-call"));

// Minimal fallback for lazy sections (invisible, no layout shift)
const SectionFallback = () => <div className="min-h-[200px]" />;

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

function MainSite() {
  const alreadySeen = !!sessionStorage.getItem("intro_seen");
  const [loaded, setLoaded] = useState(alreadySeen);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
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
          <hr className="border-0 border-t-4 border-ink" />
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <LabReport />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Career />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Philosophy />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Bounty />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
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
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
