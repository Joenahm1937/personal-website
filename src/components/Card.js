const Card = ({card}) => (
  <div className="card" ref={card}>
    <div className="sneaker">
      <div className="circle"></div>
      <img src="envelope.png" alt="envelope" className="envelope"></img>
    </div>
    <h3 id="contact">Contact Me</h3>
    <div className="info">
      <button>Email</button>
      <button>Phone</button>
    </div>
  </div>
);

export default Card;
