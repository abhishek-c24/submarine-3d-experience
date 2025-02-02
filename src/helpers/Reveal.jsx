import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const variant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Reveal({ children, delay }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        variants={variant}
        initial="hidden"
        animate={mainControls}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.2,
          delay: delay,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
