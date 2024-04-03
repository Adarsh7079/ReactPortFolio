import React from 'react'
import logo from "../assets/ap.svg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between py-6'>
        <div className="flex items-center flex-shrink-0">
            <img
            className='mx-2 w-[200px]'
             src="https://png.pngtree.com/png-vector/20220221/ourmid/pngtree-yellow-and-black-alphabet-letter-logo-with-connected-ap-and-p-design-vector-png-image_28004786.png" alt="logo" />
        </div>
        <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/Adarsh7079">
               <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/">
            <FaLinkedin/>
            </a>
           <a href="">
           <FaInstagram/>
           </a>
            
         
        </div>
    </nav>
  )
}

export default Navbar