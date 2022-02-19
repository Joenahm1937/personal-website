import { motion } from "framer-motion";
const ColorSorter = () => {
  return (
    <motion.div
      className="item ColorSorter"
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.6,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      <h1 className="projectHeader">Color Sorter</h1>
      <div className="projectContent">
        <div className="topRow">
          <img src="gifs/colorSorter.gif" alt="colorSortergif" className="gif"></img>
        </div>
        <div className="bottomRow">Sorting Visualizer with multipe parameters blah blah blah</div>
      </div>
    </motion.div>
  );
};

export default ColorSorter;
