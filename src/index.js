import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Portfolio from './Portfolio.jsx'
import MarketCap from './MarketCap.jsx'
import Navbar from './Navbar.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Footer from './Footer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/marketcap">
          <MarketCap />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
