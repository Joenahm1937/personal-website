import "./App.css";
import Snowfall from "react-snowfall";
import AnimatedTyping from './components/AnimatedTyping'

function App() {
  return (
    <div className="App">
      <Snowfall
        color="#add8e6"
        style={{}}
        snowflakeCount={50}
      />
      <AnimatedTyping/>
    </div>
  );
}

export default App;
