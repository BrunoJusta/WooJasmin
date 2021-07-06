import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export let easing = [0.6, -0.05, 0.01, 0.99];

export let fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

export let fadeInUpImg = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

export let fadeInRight = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export let home_stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export let stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
