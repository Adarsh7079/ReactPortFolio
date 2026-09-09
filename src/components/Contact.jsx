import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiClock, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../assets";

const initialForm = { name: "", email: "", message: "" };
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${formData.name || "a visitor"}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete your name, email, and message.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      await emailjs.sendForm("service_33ujv8e", "template_vhh9isc", form.current, { publicKey: "f1gcIXciOENiw9QlU" });
      setStatus("sent");
      setFormData(initialForm);
    } catch (requestError) {
      console.error("EmailJS contact form error:", requestError);
      setStatus("error");
      setError("The mail service is unavailable right now. You can still send this message with your email app.");
      window.location.assign(mailto);
    }
  };

  return <section id="contact" className="border-t border-slate-800/80 pb-20 pt-14 sm:pb-28 sm:pt-20">
    <div className="mb-10"><p className="section-kicker">Get in touch</p><h2 className="section-title">Have an idea? Let’s make it <span>real.</span></h2></div>
    <div className="glass grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-[.85fr_1.15fr] lg:p-14">
      <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <p className="max-w-sm text-base leading-7 text-slate-400">I’m open to product roles, frontend collaborations, and projects that make a useful difference. Tell me a little about what you’re working on.</p>
        <div className="mt-9 space-y-5"><a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-300/10 text-teal-300 transition group-hover:bg-teal-300 group-hover:text-slate-950"><FiMail /></span><div className="min-w-0"><small className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Email me</small><span className="mt-1 block break-all text-sm font-semibold text-slate-200">{CONTACT.email}</span></div></a><a href={`tel:${CONTACT.phoneNo.replace(/[^+\d]/g, "")}`} className="group flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-300/10 text-orange-300 transition group-hover:bg-orange-300 group-hover:text-slate-950"><FiSend /></span><div><small className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Call me</small><span className="mt-1 block text-sm font-semibold text-slate-200">{CONTACT.phoneNo}</span></div></a><div className="flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-700/50 text-slate-300"><FiMapPin /></span><div><small className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Based in</small><span className="mt-1 block text-sm font-semibold text-slate-200">{CONTACT.address}</span></div></div></div>
        <div className="mt-10 flex gap-3 rounded-2xl border border-teal-300/15 bg-teal-300/5 p-4"><FiClock className="mt-0.5 shrink-0 text-teal-300" /><p className="text-sm leading-6 text-slate-400"><strong className="text-slate-200">Quick response time.</strong><br />I usually respond within one to two business days.</p></div>
      </motion.div>
      <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        {status === "sent" ? <div className="grid min-h-[350px] place-items-center rounded-2xl border border-teal-300/25 bg-teal-300/5 p-8 text-center"><div><FiCheckCircle className="mx-auto text-5xl text-teal-300" /><h3 className="mt-5 text-2xl font-bold text-slate-100">Message sent!</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Thanks for reaching out. I’ll get back to you shortly.</p><button onClick={() => setStatus("idle")} className="mt-7 text-sm font-bold text-teal-300 hover:text-teal-200">Send another message</button></div></div> : <form ref={form} onSubmit={sendEmail} noValidate className="space-y-5">
          <input type="hidden" name="from_name" value={formData.name} /><input type="hidden" name="from_email" value={formData.email} /><input type="hidden" name="reply_to" value={formData.email} />
          <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-bold text-slate-300">Your name<input required name="name" value={formData.name} onChange={event => setFormData({...formData, name:event.target.value})} placeholder="Jane Smith" className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 font-normal text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300" /></label><label className="block text-sm font-bold text-slate-300">Email address<input required type="email" name="email" value={formData.email} onChange={event => setFormData({...formData, email:event.target.value})} placeholder="jane@company.com" className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 font-normal text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300" /></label></div>
          <label className="block text-sm font-bold text-slate-300">Tell me about your project<textarea required name="message" value={formData.message} onChange={event => setFormData({...formData, message:event.target.value})} rows="7" placeholder="I’d like to discuss..." className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-900/70 p-4 font-normal text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300" /></label>
          {error && <div role="alert" className="rounded-xl border border-orange-300/30 bg-orange-300/10 p-3 text-sm leading-6 text-orange-200">{error}{status === "error" && <a href={mailto} className="ml-1 font-bold underline underline-offset-2">Open email app <FiArrowUpRight className="inline" /></a>}</div>}
          <button disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200 disabled:cursor-wait disabled:opacity-70"><FiSend />{status === "sending" ? "Sending…" : "Send message"}</button><p className="text-xs text-slate-500">Your details are only used to reply to this message.</p>
          <a href={mailto} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-teal-300"><FiMail /> Prefer your email app? Write directly <FiArrowUpRight /></a>
        </form>}
      </motion.div>
    </div>
  </section>;
};

export default Contact;
