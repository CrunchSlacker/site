import { Link } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="introduction">
        <div>
          <h1 className="title">Glizzy</h1>
          <h3 className="description">Bigger than Black and White</h3>
        </div>
        <div ontouchstart="">
          <div className="button">
            <Link to="/allSubjects">View Subjects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
