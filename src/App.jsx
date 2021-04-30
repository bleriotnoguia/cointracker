import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="flex bg-gradient-to-b from-gray-100 to-white ">
      <div className="container mt-28 px-16">
        <div className="text-left">
          <h1 className="font-bold text-4xl text-gray-800">Crypto Portfolio Tracker</h1>
          <p className="text-md text-xl pt-4 text-gray-500">
            Keep track of you profits, losses and portfolio valuation with our
            easy to use platform
          </p>
          <Link
            to="/portfolio"
            className="mt-5 px-5 py-3 ali inline-block bg-blue-600 text-white font-bold rounded-md"
          >
            Your portfolio
          </Link>
        </div>
      </div>
      <div className="container px-16 py-8">
        <div className="relative" style={{height: "50vh"}}>
          <img
            className="absolute bottom-0"
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-left.png?_=f3cd81e"
          />
          <img
            className="absolute right-0"
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-right.png?_=f3cd81e"
          />
          <img
            className="absolute left-4"
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/safari-lightmode.png?_=f3cd81e"
          />
          <img
            className="absolute right-4 top-8"
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/preview-mobile.png?_=f3cd81e"
          />
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="container pr-4 pl-4">
        <div className="relative bg-gray-100 pl-16 pt-12 rounded-3xl" style={{height: "50vh"}}>
          <img className="absolute left-32 top-0 scale-125" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/iphone-portfolio-light.png" alt=""/>
          <div className="w-1/2">
            <h1 className="text-3xl">Also available on</h1>
            <h1 className="text-3xl font-bold">iOS and Android</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque neque aliquid dolores dignissimos natus placeat architecto?
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-4 pl-4 pr-8">
        <div className="bg-gray-100 rounded-3xl p-8">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-0.svg?_=65f30fb" />
          <h1 className="font-bold">Real-time price data</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
        </div>
        <div className="bg-gray-100 rounded-3xl p-8">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-1.svg?_=65f30fb" />
          <h1 className="font-bold">Real-time price data</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
        </div>
        <div className="bg-gray-100 rounded-3xl p-8">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-2.svg?_=65f30fb" />
          <h1 className="font-bold">Real-time price data</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
        </div>
        <div className="bg-gray-100 rounded-3xl p-8">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-3.svg?_=65f30fb" />
          <h1 className="font-bold">Real-time price data</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
