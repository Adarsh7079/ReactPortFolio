import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Codingprofile from "./components/Codingprofile";

const App = () => (
  <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100 selection:bg-teal-300 selection:text-slate-950">
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="noise" />
    </div>
    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Navbar />
        <Hero />
        <About />
        <Codingprofile/>
        <Technologies/>
        <Experience/>
        <Project/>
        <Contact/>
    </div>
  </main>
);

export default App;
