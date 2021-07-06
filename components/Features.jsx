import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger, fadeInUpImg } from "../animations/index.js";
import Image from "next/image";

export const Features = () => {
  return (
    <motion.div
      variants={stagger}
      className="relative flex flex-col items-center w-full"
    >
      <motion.div
        variants={fadeInUp}
        className=" flex-col bg-white w-full h-auto py-10 shadow-simple mb-28 flex justify-center items-center"
      >
        <motion.h2 variants={fadeInUp} className="title ">
          funcionalidades
        </motion.h2>

        <motion.div className="flex justify-between items-center w-full max-w-7xl">
          <motion.div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/products.svg"
              alt="signage"
              className="pointer-events-none"
              width={84}
              height={84}
            />
            <h3 className="sub-title mt-4">Produtos</h3>
            <p className="text">
              Sincronização individual ou em bulk de produtos simples ou
              variáveis.
            </p>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/clients.svg"
              alt="signage"
              className="pointer-events-none"
              width={84}
              height={84}
            />
            <h3 className="sub-title mt-4">Clientes</h3>
            <p className="text">
              Sincronização individual ou em bulk de clientes
            </p>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/orders.svg"
              alt="signage"
              className="pointer-events-none"
              width={84}
              height={84}
            />
            <h3 className="sub-title mt-4">Encomendas</h3>
            <p className="text">
              Sincronização de portes de envio e despacho automatico de faturas
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
