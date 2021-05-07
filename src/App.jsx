import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <div className="container px-4 mx-auto flex flex-col-reverse md:flex-row py-8">
        <div className="md:w-1/2 mt-5 lg:mt-20 lg:pr-16">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">Crypto Portfolio Tracker</h1>
            <p className="text-lg lg:text-xl pt-2 lg:pt-4 text-gray-500">
              Keep track of you profits, losses and portfolio valuation with our
              easy to use platform
            </p>
            <Link
              to="/portfolio"
              className="mt-5 px-5 py-3 ali inline-block bg-blue-600 text-white font-bold rounded-lg"
            >
              Your portfolio
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 -ml-3 lg:pl-16">
          <div className="relative h-screen/3 md:h-screen/4 lg:h-screen/2">
            <img
              className="absolute bottom-0"
              src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-left.png?_=f3cd81e"
            />
            <img
              className="absolute -right-2 lg:-right-12 -top-4"
              src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/ellipse-right.png?_=f3cd81e"
            />
            <img
              className="absolute transform w-full lg:left-4"
              src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/safari-lightmode.png?_=f3cd81e"
            />
            <img
              className="absolute w-1/3 top-3 -right-2 lg:right-4 lg:right-0 lg:top-8"
              src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/preview-mobile.png?_=f3cd81e"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container px-4 mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="container text-center lg:text-left mb-4 lg:pr-4">
          <div className="relative bg-gray-100 p-8 lg:pl-16 lg:pt-12 rounded-3xl h-full">
            <div className="lg:w-1/2">
              <h1 className="text-3xl">Also available on</h1>
              <h1 className="text-3xl font-bold">iOS and Android</h1>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque neque aliquid dolores dignissimos natus placeat architecto?
              </p>
              <Link
                to="/portfolio"
                className="mt-5 px-5 py-3 ali inline-block bg-blue-600 text-white font-bold rounded-md"
              >
                Your portfolio
              </Link>
            </div>
            <img className="hidden lg:block lg:absolute lg:left-32 lg:top-15 lg:top-0 transform lg:scale-125 xl:scale-110" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/iphone-portfolio-light.png" alt=""/>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:pl-4">
          <div className="bg-gray-100 rounded-3xl p-8">
            <img className="mb-4" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-0.svg?_=65f30fb" />
            <h1 className="font-bold">Real-time price data</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8">
            <img className="mb-4" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-1.svg?_=65f30fb" />
            <h1 className="font-bold">Real-time price data</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8">
            <img className="mb-4" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-2.svg?_=65f30fb" />
            <h1 className="font-bold">Real-time price data</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8">
            <img className="mb-4" src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/home/intro-icon-3.svg?_=65f30fb" />
            <h1 className="font-bold">Real-time price data</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deserunt?</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
