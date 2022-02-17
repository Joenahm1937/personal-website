import Typing from "react-typing-animation";

const AnimatedTypingComponent = () => {
  const entry1 = 'Joseph Nahm';
  const entry2 = 'a Full Stack Developer';
  const entry3 = 'looking for Work';
  return <div>
    Hi, I'm
    <Typing loop="true">
      <Typing.Speed ms={50} />
      <span>{entry1}</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={entry1.length} />
      <span>{entry2}</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={entry2.length} />
      <span>{entry3}</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={entry3.length} />
    </Typing>
  </div>
};

export default AnimatedTypingComponent;
