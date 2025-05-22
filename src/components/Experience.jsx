import { motion } from "framer-motion";
import { EXPERIENCES } from "../assets";

const Experience = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <h1>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0,x: -100}}
            transition={{duration:1}}
             className=" w-full lg:w-1/4">
              <p className=" mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration:1}}
             className=" w-full max-w-xl lg:w-3/4">
              <h6 className=" mb-2 font-semibold text-2xl">
               {experience.company} <br />
                <span className=" text-lg text-purple-100">
                {experience.role}
                </span>
              </h6>
              <p className=" mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default Experience;
