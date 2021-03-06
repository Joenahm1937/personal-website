import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Sudorkle from "./projects/Sudokrle";
import ColorSorter from "./projects/ColorSorter";
import Gradynt from "./projects/Gradynt";
import SDC from "./projects/SDC";
import FEC from "./projects/FEC";
const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.4,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        className="inner-carousel"
      >
        <FEC />
        <SDC />
        <Sudorkle />
        <ColorSorter />
        <Gradynt />
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
