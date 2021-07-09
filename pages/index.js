import Head from "next/head";
import { Link } from "react-scroll";
import React, { Component } from "react";
import { Contacts } from "../components/Contacts";
import { Features } from "../components/Features";
import { Install } from "../components/Install";
import Image from "next/image";

import { animate, motion } from "framer-motion";
import { fadeInUp, home_stagger } from "../animations/index.js";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="relative z-10 flex flex-col items-center w-full h-full pb-20 pt-24"
    >
      <Head>
        <title>WooJasmin - Integação do Jasmin com WooCommerce</title>
        <meta
          property="title"
          content="WooJasmin - Integação do Jasmin com WooCommerce"
          key="title"
        />
        <meta
          property="description"
          content="Sincronize produtos, clientes e encomendas com apenas um clique."
          key="description"
        />
        <meta
          property="keywords"
          content="woojasmin, plugin, sincronizar, automatico, personalizar"
          key="keywords"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={home_stagger}
        className="flex flex-col items-center w-full "
      >
        <motion.div
          variants={fadeInUp}
          className="relative w-full lg:max-w-screen-lg 2xl:max-w-screen-2xl flex flex-col md:flex-row justify-center items-center mb-48 mt-0 md:mt-20 p-4"
        >
          <motion.div
            variants={fadeInUp}
            className="w-full flex flex-col justify-center items-center md:items-start mb-5 mt-5"
          >
            <h1 className="main-title mb-5">
              Integre o Software Jasmin com a sua Loja e Automatize Processos
            </h1>
            <p className="description mb-5">
              Sincronize produtos, clientes e encomendas com apenas um clique.
            </p>
            <Link to="contact" spy={true} smooth={true}>
              <a className="button button-main shadow-button mb-10 md:mb-0">
                Entrar em Contacto
              </a>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center items-center"
          >
            <Image
              src="/assets/screens.png"
              alt="signage"
              className="pointer-events-none"
              width={900}
              height={549}
            />
          </motion.div>
        </motion.div>

        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute -z-10 right-0 top-0 w-auto h-auto`}
        >
          <Image
            src="/assets/blob.svg"
            alt="signage"
            className="pointer-events-none"
            width={1211}
            height={859}
          />
        </motion.div>
        <Features />
        <Install />

        <Contacts />
      </motion.div>
    </motion.div>
  );
}
