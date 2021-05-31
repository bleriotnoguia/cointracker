import { useState, useEffect } from "react";
import axios from "axios";

export default function Portfolio() {
  const [data, setData] = useState([]);
  // var cmc_api_key = "xxxxx-xxxx-xxxxx-xxxxxxxx-xxxxxxx";
  var cmc_api_key = "bba30db5-721e-4ecb-bb1f-9c585a0f50d7";
  var url ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD";

  function getLastData(){
    axios
      .get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': cmc_api_key,
          Accept: "application/json",
        }
      })
      .then(function (response) {
        localStorage.setItem("coins", JSON.stringify(response.data.data))
        setData(response.data.data)
      }
    );
  }

  useEffect(() => {
    if(!localStorage.getItem("coins")){
      getLastData()
    }else{
      setData(JSON.parse(localStorage.getItem("coins")))
    }
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100 pt-6">
          <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pb-6">
            <table className="table-auto text-center" style={{width: "100%"}}>
              <thead>
                <tr>
                  <th className="text-left">Name symbol</th>
                  <th className="text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((coin, index) => {
                  return (
                    <tr key={index}>
                      <td className="flex items-center text-left py-1.5">
                        <img
                          className="mr-2 w-5 md:w-6"
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                          alt={coin.name}
                          />
                        {coin.name + " " + coin.symbol}
                      </td>
                      <td className="text-right py-1.5">${coin.quote.USD.price.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    </>
  );
}