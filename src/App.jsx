import { useState } from "react";
import "./index.css";
import Loader from "@components/loader";
import Masthead from "@components/masthead";
import Nav from "@components/nav";
import Hero from "@components/hero";
import Projects from "@components/projects";
import LabReport from "@components/lab-report";
import Career from "@components/career";
import Contact from "@components/contact";
import Footer from "@components/footer";

export default function App() {
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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
