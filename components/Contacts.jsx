import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";
import { fadeInUp, stagger, fadeInUpImg } from "../animations/index.js";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toastifySuccess = () => {
    toast.success("☑️ Email enviado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const toastifyError = () => {
    toast.error("☑️ Ocorreu um erro, tente novamente!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, company, number, message };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        toastifySuccess();
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setNumber("");
        setMessage("");
        window.scrollTo(0, 0);
      } else {
        toastifyError();
        setName("");
        setEmail("");
        setCompany("");
        setNumber("");
        setMessage("");
      }
    });
  };
  return (
    <motion.div
      variants={stagger}
      className="relative flex flex-col items-center w-full"
    >
      <motion.div
        variants={fadeInUp}
        className=" flex-col bg-white w-full h-auto py-10 shadow-base mb-28 flex justify-center items-center"
      >
        <motion.h2 id="contact" variants={fadeInUp} className="title">
          Fale Connosco
        </motion.h2>
        <form
          className="flex flex-col justify-between  w-full lg:max-w-screen-md 2xl:max-w-screen-lg p-4 h-3/4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex justify-between items-center lg:flex-row md:flex-col xs:flex-col ">
            <div className="flex flex-col  xl:w-96 lg:w-72 md:w-full xs:w-full mb-10">
              <label htmlFor="name" className="text-sm text-theme-blue">
                O seu nome
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={name}
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col xl:w-96 lg:w-72 md:w-full xs:w-full mb-10">
              <label htmlFor="email" className="text-sm text-theme-blue">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="exemplo@gmail.com"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-transparent"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center lg:flex-row md:flex-col xs:flex-col">
            <div className="flex flex-col  xl:w-96 lg:w-72 md:w-full xs:w-full mb-10">
              <label htmlFor="company" className="text-sm text-theme-blue">
                Nome da Empresa
              </label>
              <input
                type="text"
                name="company"
                placeholder="Nome da empresa"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-transparent"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col  xl:w-96 lg:w-72 md:w-full xs:w-full mb-10">
              <label htmlFor="number" className="text-sm text-theme-blue">
                Contacto
              </label>
              <input
                type="number"
                name="number"
                placeholder="Contacto"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-transparent"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full mb-5">
            <label htmlFor="message" className="text-sm text-theme-blue">
              A sua mensagem
            </label>
            <textarea
              className="px-2 h-32 bg-gray-100 border-1 border-gray-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-transparent"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </div>
          <input type="submit" className="button button-secondary" />
        </form>
      </motion.div>
      <ToastContainer className="absolute z-50" />
    </motion.div>
  );
};
