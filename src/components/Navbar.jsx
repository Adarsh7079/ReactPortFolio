import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => (
  <header className="h-[80px] sm:h-[96px]">
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-[#07111f]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
      <a href="#home" className="group flex items-center gap-3" aria-label="Adarsh Paritosh home">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-lg font-extrabold text-slate-950 shadow-lg shadow-teal-400/20 transition-transform group-hover:-rotate-6">AP</span>
        <span className="hidden text-sm font-bold tracking-tight text-slate-100 sm:block">Adarsh <span className="text-teal-300">Paritosh</span></span>
      </a>
      <div className="hidden items-center gap-6 text-sm font-medium md:flex">
        <a className="nav-link" href="#about">About</a><a className="nav-link" href="#work">Work</a><a className="nav-link" href="#experience">Experience</a>
      </div>
      <div className="flex items-center gap-2">
        <a title="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950" href="https://github.com/Adarsh7079" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a title="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950" href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a title="Topmate mentoring" className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-xs font-black text-orange-300 transition hover:border-orange-300 hover:bg-orange-300 hover:text-slate-950" href="https://topmate.io/adarsh_paritosh" target="_blank" rel="noreferrer" aria-label="Topmate mentoring profile"><img src="https://topmate.io/cdn-cgi/image/width=64,quality=90/images/common/logo-icon.svg" alt="" className="h-5 w-5 object-contain" /></a>
        <a href="#contact" className="ml-2 hidden rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-300 sm:block">Let’s talk</a>
      </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
