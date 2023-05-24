import React from "react";
import { motion } from "framer-motion";

function Button({ design, text }) {
  return (
    <motion.button
      //   whileInView={{ opacity: 1 }}
      //   initial={{ opacity: 0 }}
      //   transition={{ duration: 1, delay: 2 }}
      //   className={`uppercase relative py-2 px-4 block  transition-all duration-1000 ease-in-out overflow-hidden ${bg} ${before} ${hover} `}
      className={design}
    >
      {text}
    </motion.button>
  );
}

export default Button;
