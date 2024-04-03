import React from "react";
import { CODING } from "../constants";
import { motion } from "framer-motion";


const Codingprofile = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1.5 }}
         className=" border-b border-b-neutral-900 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className=" my-20 text-center text-4xl">
        Coding
        <span className=" text-neutral-500">Profile</span>
      </motion.h1>
      <div className="w-full flex flex-wrap ">
  {CODING.map((data, index) => (
    <div className="lex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  p-4">
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <a className="relative block bg-gray-900 group" href="##">
          <img
            className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-md "
            src={data.image}
            alt="GeeksforGeeks"
          />
          <div className="relative p-5">
            <div className="mt-40">
              {/* Hidden content */}
              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="p-2">
                  <p className="text-lg text-white">{data.description }</p>
                  <a href={data.profile} className="px-4 py-2 text-sm text-white bg-green-600 rounded-md">View Profile</a>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </a>
        <center className="mt-5">
          <h1 className="text-green-600 text-4xl">{data.name}</h1>
        </center>
      </div>
    </div>
  ))}
</div>

    </motion.div>
  );
};

export default Codingprofile;
