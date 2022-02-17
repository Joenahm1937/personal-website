import "./App.css";
import Snowfall from "react-snowfall";
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Snowfall
        color="#add8e6"
        style={{}}
        snowflakeCount={50}
      />
      <Header/>
    </div>
  );
}

export default App;
