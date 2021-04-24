import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="container p-2">
        <div className="text-left">
          <h1 className="font-bold text-4xl">Crypto Portfolio Tracker</h1>
          <p className="text-md">
            Keep track of you profits, losses and portfolio valuation with our
            easy to use platform
          </p>
          <Link
            to="/portfolio"
            className="mt-5 px-5 py-3 inline-block bg-blue-600 text-white font-bold rounded-md"
          >
            Your portfolio
          </Link>
        </div>
      </div>
      <div className="container relative">
        <img
          className="absolute"
          src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-left.png?_=f3cd81e"
        />
        <img
          className="absolute"
          src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-right.png?_=f3cd81e"
        />
        <img
          className="absolute"
          src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/safari-lightmode.png?_=f3cd81e"
        />
        <img
          className="absolute right-0"
          src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/preview-mobile.png?_=f3cd81e"
        />
      </div>
    </div>
  );
}

export default App;
