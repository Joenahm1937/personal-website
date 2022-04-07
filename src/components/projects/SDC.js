import { motion } from "framer-motion";
const SDC = () => {
  return (
    <motion.div
      className="item SDC ColorSorter"
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.6,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      <h1 className="projectHeader">SDC</h1>
      <div className="projectContent">
        <div className="topRow">
          <img src="gifs/SDC.png" alt="colorSortergif" className="pic"></img>
        </div>
        <div className="bottomRow">API server interacting with PostgreSQL database to supply and store information to front-end</div>
      </div>
    </motion.div>
  );
};

export default SDC;