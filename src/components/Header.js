import Typing from "react-typing-animation";

const Header = () => {
  const entry1 = "Joseph Nahm";
  const entry2 = "a Developer";
  const entry3 = "Looking For Work";
  return (
    <div className="header">
      <h1>
        Hi, I am
        <Typing loop={true}>
          <Typing.Speed ms={60} />
          {entry1}
          <Typing.Delay ms={2000} />
          <Typing.Backspace count={entry1.length + 1} />
          {entry2}
          <Typing.Delay ms={2000} />
          <Typing.Backspace count={entry2.length + 1} />
          {entry3}
          <Typing.Delay ms={2000} />
          <Typing.Backspace count={entry3.length + 1} />
        </Typing>
      </h1>
    </div>
  );
};

export default Header;
