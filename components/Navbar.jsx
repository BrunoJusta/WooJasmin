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
      className="bg-theme-wooWhite fixed flex  justify-center items-center flex-wrap  w-full top-0 z-50 transition-all duration-200 ease-in-out p-2"
    >
      <div className="w-full  max-w-screen-2xl flex justify-between">
        <div className="inline-flex items-center p-2 mr-4 select-none">
          WooCommerce
        </div>
        <div className="g-theme-primary  w-full md:inline-flex md:flex-grow md:w-auto">
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <a
              onClick={handleClick}
              className="cursor-pointer bg-theme-purple bg-opacity-20 border-theme-purple border-2 rounded-full uppercase text-theme-purple font-semibold px-4 py-1 hover:text-gray-200 hover:bg-theme-purple w-auto self-center"
            >
              Contactos
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
