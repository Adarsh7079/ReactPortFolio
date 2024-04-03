import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FcLinux } from "react-icons/fc";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      case: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <motion.div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1.5 }}
       className=" flex flex-wrap items-center justify-center gap-4 ">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className=" rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className=" text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className=" text-7xl text-cyan-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className=" text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className=" text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
         className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className=" text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className=" text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <FcLinux className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4">
          <GrMysql className=" text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
