import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaMoon, FaSun, FaList, FaSyncAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import MyListBox from "./MyListBox.jsx";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function updateTheme() {
    localStorage.theme = !isDarkMode ? "dark" : "";
    setIsDarkMode(!isDarkMode);

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  useEffect(() => {
    if (
      (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) || (("theme" in localStorage) && localStorage.theme === "dark")
    ) {
      localStorage.theme = "dark";
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="container px-4 mx-auto text-gray-700 flex justify-between">
      <div id="logo" className="font-bold py-4">
        <Link to="/">
          <img
            className="h-7"
            src={
              isDarkMode
                ? "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
                : "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg"
            }
            alt="coinmarketcap logo"
          />
        </Link>
      </div>
      <ul className="flex items-center dark:text-gray-200">
        <li className="mr-2.5">
          <Link to="/marketcap" data-tip="Marketcap" data-for="marketcap">
            <FaList />
          </Link>
          <ReactTooltip
            id="marketcap"
            place="bottom"
            type="dark"
            effect="solid"
          />
        </li>
        <li className="p-2">
          <Link to="/portfolio" data-tip="Protfolio" data-for="portfolio">
            <FaChartPie />
          </Link>
          <ReactTooltip
            id="portfolio"
            place="bottom"
            type="dark"
            effect="solid"
          />
        </li>
        <li>
          <MyListBox />
        </li>
        <li className="p-2" data-tip="Switch theme" data-for="theme">
          {isDarkMode ? (
            <FaSun
              className="cursor-pointer"
              onClick={() => updateTheme()}
            />
          ) : (
            <FaMoon
              className="cursor-pointer"
              onClick={() => updateTheme()}
            />
          )}
        </li>
        <ReactTooltip id="theme" place="bottom" type="dark" effect="solid" />
        <li className="p-2">
          <FaSyncAlt
            data-tip="Refresh data"
            data-for="refresh"
            className="cursor-pointer"
          />
          <ReactTooltip
            id="refresh"
            place="bottom"
            type="dark"
            effect="solid"
          />
        </li>
      </ul>
    </div>
  );
}
