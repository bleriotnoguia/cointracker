import React from 'react'

export default function Footer() {
    return (
        <div className="flex justify-between px-8 py-8">
            <div className="flex-1 pr-28">
                <img className="h-7" src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt=""/>
                <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, atque.</p>
            </div>
            <div className="flex-1">
                <h1 className="font-bold">title1</h1>
                <ul className="mt-2">
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                </ul>
            </div>
            <div className="flex-1">
                <h1 className="font-bold">title2</h1>
                <ul className="mt-2">
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                </ul>
            </div>
            <div className="flex-1">
                <h1 className="font-bold">title3</h1>
                <ul className="mt-2">
                    <li>text 1</li>
                    <li>text 2</li>
                    <li>text 3</li>
                </ul>
            </div>
        </div>
    )
}
