import { useEffect, useState } from "react";
// import axios from "axios";
import response from "./data.json";

export default function Portfolio() {
  const [data, setData] = useState(response.data);
  // const [data, setData] = useState([]);
  // var cmc_api_key = "xxxxx-xxxx-xxxxx-xxxxxxxx-xxxxxxx";
  // var url ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD";
  // useEffect(() => {
  //   axios
  //     .get(url, {
  //       headers: {
  //         'X-CMC_PRO_API_KEY': cmc_api_key,
  //         Accept: "application/json",
  //       }
  //     })
  //     .then(function (response) {
  //       setData(response.data.data)
  //     }
  //   );
  // }, [data]);
  return (
    <div className="p-5">
        <div className="text-left">
          <h1 className="font-bold text-4xl uppercase">Portfolio</h1>
          <p className="text-xl">Track your crypto portfolio</p>
        </div>
        <div className="container mx-auto">
          <table className="table-auto text-center" style={{width: "100%"}}>
            <thead>
              <tr>
                <th>No</th>
                <th>Name symbol</th>
                <th>Price</th>
                <th>Holdings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="flex items-center">
                      <img
                        className="mr-2"
                        style={{ width: "30px" }}
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                        alt=""
                      />
                      {coin.name + " " + coin.symbol}
                    </td>
                    <td>$ {coin.quote.USD.price}</td>
                    <td>hol</td>
                    <td>act</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </div>
  );
}
