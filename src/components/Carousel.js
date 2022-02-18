import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Sudorkle from "./projects/Sudokrle";
import ColorSorter from "./projects/ColorSorter";
import Gradynt from "./projects/Gradynt";
import SDC from "./projects/SDC";
const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        className="inner-carousel"
      >
        <Sudorkle/>
        <ColorSorter/>
        <Gradynt/>
        <SDC/>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
