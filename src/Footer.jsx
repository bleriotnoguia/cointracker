import React from 'react'

export default function Footer() {
    return (
        <div className="container px-4 mx-auto py-8">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:w-1/3 py-3">
                    <img className="h-7" src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg" alt=""/>
                    <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, atque.</p>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 lg:grid-cols-4 py-3">
                    <div className="py-3">
                        <h1 className="font-bold">title1</h1>
                        <ul className="mt-2">
                            <li>text 1</li>
                            <li>text text 2</li>
                            <li>text 3</li>
                        </ul>
                    </div>
                    <div className="py-3">
                        <h1 className="font-bold">title2</h1>
                        <ul className="mt-2">
                            <li>text 1</li>
                            <li>text text 2</li>
                            <li>text 3</li>
                        </ul>
                    </div>
                    <div className="py-3">
                        <h1 className="font-bold">title3</h1>
                        <ul className="mt-2">
                            <li>text 1</li>
                            <li>text text 2</li>
                            <li>text 3</li>
                        </ul>
                    </div>
                    <div className="py-3">
                        <h1 className="font-bold">title3</h1>
                        <ul className="mt-2">
                            <li>text 1</li>
                            <li>text text 2</li>
                            <li>text 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <p>©️ 2021 Bleriot Noguia. All rights reserved</p>
            </div>
        </div>
    )
}
