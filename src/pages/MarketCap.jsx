import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import defaultCoins from "../data.json"

export default function Portfolio(props) {
  const [data, setData] = useState([]);
  // var cmc_api_key = "xxxxx-xxxx-xxxxx-xxxxxxxx-xxxxxxx";
  var cmc_api_key = "bba30db5-721e-4ecb-bb1f-9c585a0f50d7";
  var url ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000";

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
      }
    ).catch(error =>{
      if(!localStorage.getItem("coins")){
        localStorage.setItem("coins", JSON.stringify(defaultCoins));
      }
      console.log(error)
    });
  }

  function loadData(offset = props.perPage){
    let data_display = JSON.parse(localStorage.getItem("coins"))
    if(data_display){
      setData(data_display.slice(offset-props.perPage, offset))
    }
  }

  function handlePageClick(data){
    let selected = data.selected + 1;
    let new_offset = Math.ceil(selected * props.perPage);
    loadData(new_offset);
  }

  useEffect(() => {
    if(!localStorage.getItem("coins")){
      getLastData()
    }
    if(!data.length){
      loadData()
    }
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 dark:from-gray-700 to-gray-50 dark:to-gray-800 pt-6 dark:text-gray-200">
          <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pt-4 pb-6">
            <h1 className="font-bold text-center md:text-left text-gray-80 dark:text-white text-4xl">
              MarketCap
            </h1>
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, maxime?</p>
          </div>
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
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={localStorage.getItem("coins") ? (JSON.parse(localStorage.getItem("coins")).length / props.perPage) : ''}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              pageClassName={'px-2'}
              onPageChange={handlePageClick}
              containerClassName={'pagination flex justify-end mt-5'}
              activeClassName={'active'}
            />
          </div>
      </div>
    </>
  );
}