import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";
import Loader from "@components/loader";
import Masthead from "@components/masthead";
import Nav from "@components/nav";
import Hero from "@components/hero";
import Projects from "@components/projects";
import LabReport from "@components/lab-report";
import Career from "@components/career";
import Education from "@components/education";
import Contact from "@components/contact";
import Footer from "@components/footer";
import Bounty from "@components/bounty";
import BookCall from "@components/book-call";
import Philosophy from "./components/philosophy";

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
          <Projects />
          <LabReport />
          <Career />
          <Philosophy />
          <Education />
          <Bounty />
          <Contact />
        </main>
        <Footer />
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
        <Route path="/book-call" element={<PageTransition><BookCall /></PageTransition>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
