import React from 'react'
import { Link } from "react-router-dom"
import { FaChartPie, FaCaretDown, FaMoon } from "react-icons/fa"

export default function Navbar() {
    return (
        <div className="container px-4 mx-auto text-gray-700 flex justify-between">
            <div id="logo" className="font-bold py-4">
                {/* <img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg" alt=""/> */}
                <Link to="/"><img className="h-7" src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt=""/></Link>
            </div>
            <ul className="flex items-center">
                <li className="p-2">
                    <Link to="/portfolio"><FaChartPie /></Link>
                </li>
                <li className="p-2 flex items-center">
                    <span className="mr-1">USD</span><FaCaretDown />
                </li>
                <li className="p-2">
                    <FaMoon />
                </li>
            </ul>
        </div>
    )
}
