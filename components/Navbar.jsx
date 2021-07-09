import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition.js";
import { motion } from "framer-motion";

export const Navbar = () => {
  const handleClick = () => {};
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-theme-wooWhite fixed flex  justify-center items-center flex-wrap shadow-base  w-full top-0 z-50 transition-all duration-200 ease-in-out p-2"
    >
      <div className="w-full  max-w-screen-2xl flex justify-between">
        <div className="inline-flex items-center p-2 mr-4 select-none">
          WooJasmin
        </div>
        <div className="g-theme-primary  w-full inline-flex flex-grow">
          <div className="ml-auto w-auto items-start justify-center  flex">
            <a onClick={handleClick} className="button button-secondary ">
              Contactos
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
