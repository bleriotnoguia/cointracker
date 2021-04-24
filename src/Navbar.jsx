import React from 'react'
import { Link } from "react-router-dom"
import { FaChartPie, FaCaretDown, FaMoon } from "react-icons/fa"

export default function Navbar() {
    return (
        <div className="px-5 bg-gray-100 text-gray-700 flex justify-between">
            <div id="logo" className="font-bold p-2">
                <Link to="/">CoinMarketCap</Link>
            </div>
            <nav>
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
            </nav>
        </div>
    )
}
