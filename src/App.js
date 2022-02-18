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
      <div className="Body">
        <div className="Column Left">
          <Header/>
          <div className="Content"></div>
          <div className="Content"></div>
        </div>
        <div className="Column Right">
          <div className="Projects"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
