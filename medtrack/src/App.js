import './App.scss';
import MedAppearance from 'comps/MedAppearance';
import Main from "comps/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MedAppearance /> */}
      <Main />
      <Link to ="/add-med">
          <button>start</button>
      </Link>
    </div>
  );
}

export default App;
