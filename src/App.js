import './app.css'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import heroSVG from './assets/undraw_send_gift.svg'
import cryptoSVG from './assets/crypto.svg'
function App() {
  return (
    <div className="app">
      <div className="content">

        <Navbar></Navbar>
        <div>

          <h1 className="hero__text">
            The Selfless Donation Platform
      </h1>
          <button className="hero__button">
            View Goals
      </button>
          <img src={heroSVG}></img>

          <img src={cryptoSVG}></img>
          <h2>Crypto Fund Me uses the public Bitcoin ledger to track anonymous funding goals. </h2>
        </div>

      </div>
      <footer className="footer">
        testing
          </footer>
    </div>
  );
}

export default App;
