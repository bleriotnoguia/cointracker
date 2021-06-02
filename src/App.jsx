import React from "react";
import Portfolio from './pages/Portfolio.jsx'
import MarketCap from './pages/MarketCap.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/marketcap">
            <MarketCap perPage={50} />
          </Route>
        </Switch>
        <Footer />
      </Router>
  </React.StrictMode>
  );
}

export default App;
