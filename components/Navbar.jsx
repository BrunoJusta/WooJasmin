import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-theme-wooWhite fixed flex  justify-center items-center flex-wrap shadow-base  w-full top-0 z-40 transition-all duration-200 ease-in-out p-2"
    >
      <div className="w-full  max-w-screen-2xl flex justify-between">
        <div className="inline-flex items-center p-2 mr-4 select-none">
          WooJasmin
        </div>
        <div className="g-theme-primary  w-full inline-flex flex-grow">
          <div className="ml-auto w-auto items-start justify-center  flex">
            <Link to="contact" spy={true} smooth={true}>
              <a className="button button-secondary ">Contactos</a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
