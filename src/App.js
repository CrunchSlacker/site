import fullLogo from "./Logo-PNGs/peerlogotransparent.png";
import Navbar from "./basics/navbar.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div>
          <img alt="full Logo" src={fullLogo} className="fullLogo" />
          <h3 className="description">Peer to Peer Knowledge</h3>
        </div>
      </div>
    </>
  );
}

export default App;
