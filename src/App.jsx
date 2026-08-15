import "./index.css";
import Masthead from "./components/Masthead";
import StickyNav from "./components/StickyNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import LabReport from "./components/LabReport";
import CareerLedger from "./components/CareerLedger";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className="bg-paper min-h-screen text-ink">
      <Masthead />
      <StickyNav />
      <main>
        <Hero />
        <hr className="border-0 border-t-4 border-ink" />
        <Projects />
        <LabReport />
        <CareerLedger />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
