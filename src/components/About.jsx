import { motion } from "framer-motion";

import myImage from "../assets/adarsh.jpeg";
import { ABOUT_TEXT } from "../assets";

const About = () => {
  return (
    <div className=" border-b border-b-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">
        About
        <span className=" text-neutral-500">Me</span>
      </h1>
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex  items-center justify-center">
            <motion.img 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:0.5}}
            className=" rounded-2xl h-[500px] w-[350px]" src={myImage} alt="about" />
          </div>
        </div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}

        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className=" my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
