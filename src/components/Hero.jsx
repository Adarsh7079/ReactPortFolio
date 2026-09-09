import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CONTACT, HERO_CONTENT } from "../assets";
import portrait from "../assets/3.jpeg";

const rise = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .65, delay } });
const Hero = () => (
  <section id="home" className="grid min-h-[calc(100vh-86px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
    <div className="min-w-0">
      <motion.p {...rise()} className="section-kicker mb-6 flex items-center gap-3"><span className="h-px w-8 bg-teal-300" />Available for opportunities</motion.p>
      <motion.h1 {...rise(.1)} className="max-w-3xl text-4xl font-extrabold leading-[.98] tracking-[-.065em] text-slate-50 sm:text-7xl lg:text-8xl">Building digital products people <span className="text-teal-300">want to use.</span></motion.h1>
      <motion.p {...rise(.2)} className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">{HERO_CONTENT}</motion.p>
      <motion.div {...rise(.3)} className="mt-9 flex flex-wrap items-center gap-4"><a href="#work" className="rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-teal-200">Explore my work <span className="ml-2 inline-block -rotate-45">→</span></a><a href="#contact" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 transition hover:border-slate-300 hover:bg-slate-800">Start a conversation</a></motion.div>
      <motion.div {...rise(.4)} className="mt-12 flex flex-wrap items-center gap-5 text-xs font-medium uppercase tracking-[.14em] text-slate-500"><span>Find me on</span><a className="text-slate-300 hover:text-teal-300" href="https://github.com/Adarsh7079" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="text-base" /></a><a className="text-slate-300 hover:text-teal-300" href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="text-base" /></a><a className="flex items-center gap-1.5 text-orange-300 hover:text-orange-200" href={CONTACT.topmate} target="_blank" rel="noreferrer" aria-label="Topmate mentoring profile"><img src="https://topmate.io/cdn-cgi/image/width=64,quality=90/images/common/logo-icon.svg" alt="" className="h-5 w-5 object-contain" /> Topmate</a><a href="#about" className="ml-2 flex items-center gap-2 text-teal-300">Scroll <FaArrowDown /></a></motion.div>
    </div>
    <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-md min-w-0"><div className="absolute -inset-5 -z-10 rounded-[2rem] border border-teal-300/20 bg-teal-300/5 rotate-6" /><div className="overflow-hidden rounded-[1.8rem] border border-slate-700/80 bg-slate-800 shadow-2xl shadow-slate-950/50"><img className="aspect-[4/4.4] w-full object-cover object-top grayscale-[15%]" src={portrait} alt="Adarsh Paritosh" /><div className="flex items-center justify-between border-t border-slate-700 px-5 py-4"><span className="font-mono text-xs text-slate-400">01 / SOFTWARE ENGINEER</span><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal-300" /></div></div></motion.div>
  </section>
);
export default Hero;
