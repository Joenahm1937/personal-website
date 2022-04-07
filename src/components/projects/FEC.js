import { motion } from "framer-motion";
const FEC = () => {
  return (
    <motion.div className="item FEC ColorSorter">
      <h1 className="projectHeader">FEC</h1>
      <div className="projectContent">
        <div className="topRow">
          <img src="gifs/FEC.gif" alt="FECgif" className="gif"></img>
        </div>
        <div className="bottomRow">
          React front-end ratings service allowing users to view product ratings
          in an e-commerce store
        </div>
      </div>
    </motion.div>
  );
};

export default FEC;
