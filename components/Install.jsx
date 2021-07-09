import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger, fadeInUpImg } from "../animations/index.js";
import Image from "next/image";

export const Install = () => {
  return (
    <motion.div
      variants={stagger}
      className="relative flex flex-col items-center w-full"
    >
      <motion.div
        variants={fadeInUp}
        className=" flex-col  w-full h-auto py-10  mb-28 flex justify-center items-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="title text-3xl  font-semibold mb-12 text-center w-full max-w-screen-md p-4"
        >
          implementação feita pelos nossos técnicos
        </motion.h2>
        <motion.div className="flex flex-col md:flex-row justify-around items-center w-full lg:max-w-screen-lg 2xl:max-w-screen-2xl p-4">
          <motion.div className="flex flex-col justify-center items-center mb-10">
            <Image
              src="/assets/install.svg"
              alt="signage"
              className="pointer-events-none"
              width={84}
              height={84}
            />
            <h3 className="sub-title mt-4">Instalação</h3>
            <p className="text">
              Não precisa de perder tempo a instalar e a configurar o plugin
              WooJasmin, a nossa equipa técnica fá-lo por si.
            </p>
          </motion.div>

          <motion.div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/custom.svg"
              alt="signage"
              className="pointer-events-none"
              width={84}
              height={84}
            />
            <h3 className="sub-title mt-4">Personalizável</h3>
            <p className="text">
              Precisa de uma funcionalidade à medida do seu negócio? Entre em
              contacto connosco e arranjamos uma solução.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
