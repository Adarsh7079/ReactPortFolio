import React, { useState, useRef } from "react";
import { CONTACT } from "../assets";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser'

const Contact = () => {
 
  const form = useRef();
  const [formData, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_33ujv8e', 'template_vhh9isc', form.current, {
        publicKey: 'f1gcIXciOENiw9QlU',
      })
      .then(
        () => {
          setData({name:"",email:"",message:""})
          toast.success("Message send",{
            position:"top-center"
          })
          
        },
        (error) => {
          console.log('FAILED...', error  );
          toast.error("faild to load",{
            position:"top-center"
          })
        },
      );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div >
    <div className=" flex justify-between flex-wrap">
        {/* left */}
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:0.5}}
        className=" border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className=" my-10 text-center text-4xl"
        >
          Get In Touch
        </motion.h1>
        <div className=" text-center tracking-tighter"></div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="tel:+91-7079429676"
          className=" my-4"
        >
          {CONTACT.phoneNo}
        </motion.a>
        <br />
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="mailto:adarshk8271@gmail.com"
          className=" border-b"
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>

      {/* right */}
      <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className=" py-10">
        <form onSubmit={sendEmail} ref={form}>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-1 ">
              <label htmlFor="name" className=" text-yellow-600 font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="px-2 text-neutral-800 outline-none bg-neutral-200 rounded-md h-[35px]"
              />
            </div>
            <div className=" flex flex-col  gap-1">
              <label htmlFor="email" className="text-yellow-600 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 text-neutral-800 bg-neutral-200 outline-none rounded-md h-[35px]"
              />
            </div>
            <div className=" flex flex-col  gap-1">
              <label htmlFor="message" className="text-yellow-600 font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                cols="20"
                rows="5"
                className="p-2 text-neutral-800 bg-neutral-200 outline-none rounded-md "
              ></textarea>
            </div>
            <div className=" flex justify-start">
              <button className=" bg-yellow-800 hover:bg-yellow-900 px-5 w-[100px] py-2 rounded-full flex">
                Send{" "}
                <span className=" mx-3">
                  <MdSend className=" w-5 h-5" />
                </span>{" "}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
