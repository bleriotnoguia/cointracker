import React from "react";
import Portfolio from './pages/Portfolio.jsx'
import Coinlist from './pages/Coinlist.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="dark:bg-gray-900" style={{minHeight: "100vh"}}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/coinlist">
              <Coinlist />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  </React.StrictMode>
  );
}

export default App;
