import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import myImage from "../assets/adarsh.jpeg";
import { ABOUT_TEXT } from "../assets";

const About = () => <section id="about" className="border-t border-slate-800/80 py-24 sm:py-32">
  <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
    <motion.div initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative mx-auto w-full max-w-sm"><div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-orange-400/60" /><img className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top grayscale-[10%]" src={myImage} alt="Adarsh at work" /></motion.div>
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><p className="section-kicker">A little bit about me</p><h2 className="section-title">Thoughtful engineering, <span>real outcomes.</span></h2><p className="mt-7 max-w-2xl leading-8 text-slate-400">{ABOUT_TEXT}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Product-minded frontend", "Scalable web systems", "AI-enabled experiences", "Clear team collaboration"].map(item => <p key={item} className="flex items-center gap-3 text-sm text-slate-300"><FiCheck className="text-teal-300" />{item}</p>)}</div><a href="#experience" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-teal-300 transition hover:gap-3">More about my journey <FiArrowUpRight /></a></motion.div>
  </div>
</section>;
export default About;
