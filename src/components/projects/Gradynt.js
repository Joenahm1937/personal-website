import { motion } from "framer-motion";
const Gradynt = () => {
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
      <h1 className="projectHeader">Gradynt</h1>
      <div className="projectContent">
        <div className="topRow">
          <img src="gifs/GRADYNT.gif" alt="colorSortergif" className="gif"></img>
        </div>
        <div className="bottomRow">Web scraping service that extracts color palettes from search inputs with a web, API, and twitter interface</div>
      </div>
    </motion.div>
  );
};

export default Gradynt;