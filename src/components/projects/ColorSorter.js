import { motion } from "framer-motion";
const ColorSorter = () => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.6,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      Color Sorter
    </motion.div>
  );
};

export default ColorSorter;
