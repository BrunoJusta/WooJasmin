import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence existBeforeEnter>
      <Navbar />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
