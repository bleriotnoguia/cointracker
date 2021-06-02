import React from 'react'
import { Link } from "react-router-dom"
import { FaChartPie, FaMoon, FaList, FaSyncAlt } from "react-icons/fa"
import ReactTooltip from 'react-tooltip'
import MyListBox from "./MyListBox.jsx"

export default function Navbar() {
    return (
        <div className="container px-4 mx-auto text-gray-700 flex justify-between">
            <div id="logo" className="font-bold py-4">
                {/* <img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg" alt=""/> */}
                <Link to="/"><img className="h-7" src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt=""/></Link>
            </div>
            <ul className="flex items-center">
                <li className="mr-2.5">
                    <Link to="/marketcap" data-tip="Marketcap" data-for="marketcap"><FaList /></Link>
                    <ReactTooltip id="marketcap" place="bottom" type="dark" effect="solid" />
                </li>
                <li className="p-2">
                    <Link to="/portfolio" data-tip="Protfolio" data-for="portfolio"><FaChartPie /></Link>
                    <ReactTooltip id="portfolio" place="bottom" type="dark" effect="solid" />
                </li>
                <li>
                    <MyListBox />
                </li>
                <li className="p-2">
                    <FaMoon data-tip="Switch theme" data-for="theme" />
                    <ReactTooltip id="theme" place="bottom" type="dark" effect="solid" />
                </li>
                <li className="p-2">
                    <FaSyncAlt data-tip="Refresh data" data-for="refresh" />
                    <ReactTooltip id="refresh" place="bottom" type="dark" effect="solid" />
                </li>
            </ul>
        </div>
    )
}
