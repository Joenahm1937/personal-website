import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ card }) => {
  const [email, setEmail] = useState("Email");
  const [phone, setPhone] = useState("Phone");

  return (
    <motion.div
      className="card"
      ref={card}
      initial={{ opacity: 0 }}
      transition={{
        delay: 1.2,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      <div className="sneaker">
        <div className="circle"></div>
        <img src="envelope.png" alt="envelope" className="envelope gif"></img>
      </div>
      <h3 id="contact">Contact Me</h3>
      <div className="info">
        <button
          onClick={() => {
            email === "Email"
              ? setEmail("josephnahm1@gmail.com")
              : setEmail("Email");
          }}
        >
          {email}
        </button>
        <button
          onClick={() => {
            phone === "Phone"
              ? setPhone("+1(310)-729-4025")
              : setPhone("Phone");
          }}
        >
          {phone}
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
