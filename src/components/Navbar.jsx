import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => (
  <nav className="flex items-center justify-between border-b border-slate-800/70 py-5 sm:py-7">
    <a href="#home" className="group flex items-center gap-3" aria-label="Adarsh Paritosh home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-lg font-extrabold text-slate-950 shadow-lg shadow-teal-400/10 transition-transform group-hover:-rotate-6">AP</span>
      <span className="hidden text-sm font-bold tracking-tight text-slate-100 sm:block">Adarsh <span className="text-teal-300">Paritosh</span></span>
    </a>
    <div className="hidden items-center gap-6 text-sm font-medium md:flex">
      <a className="nav-link" href="#about">About</a><a className="nav-link" href="#work">Work</a><a className="nav-link" href="#experience">Experience</a>
    </div>
    <div className="flex items-center gap-2">
      <a className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950" href="https://github.com/Adarsh7079" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950" href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
      <a href="#contact" className="ml-2 hidden rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-300 sm:block">Let’s talk</a>
    </div>
  </nav>
);
export default Navbar;
