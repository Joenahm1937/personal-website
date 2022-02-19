import { motion } from "framer-motion";
const Sudorkle = () => {
  return (
    <motion.div className="item Sudorkle">
      <h1 className="projectHeader">Sudorkle</h1>
      <div className="projectContent">
        <div className="columnLeft">
          <img src="gifs/sudorkle.gif" alt="sudorklegif" className="gif"></img>
        </div>
        <div className="columnRight">
          Sudoku Game built on React Native
        </div>
      </div>
    </motion.div>
  );
};

export default Sudorkle;
