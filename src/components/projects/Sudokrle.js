import { motion } from "framer-motion";
const Sudorkle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.6,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
      className="item Sudorkle"
    >
      <h1 className="projectHeader">Sudorkle</h1>
      <div className="projectContent">
        <div className="columnLeft">
          <img src="gifs/sudorkle.gif" alt="sudorklegif" className="gif"></img>
        </div>
        <div className="rightColumn">
          <div>React Native Sudoku application with a focus on simplicity</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sudorkle;
