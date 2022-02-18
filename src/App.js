import Snowfall from "react-snowfall";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Snowfall color="#add8e6" style={{}} snowflakeCount={50} />
      <div className="Body">
        <Header />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
