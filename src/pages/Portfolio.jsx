import { useRef, useState, useEffect } from "react";
import { ReactComponent as EyeClose } from "../img/eye-close.svg";
import MyDialog from "../components/MyDialog";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import {listHolding, deleteCoin} from '../actions/holdingActions'

export default function Portfolio() {
  const dispatch = useDispatch()

  const holdingList = useSelector(state => state.holdingList)
  const {error, holdings} = holdingList
  const alertRef = useRef();

  function handleDeleteCoin(id) {
    if(window.confirm("Do you realy want to delete this coin ?")){
      dispatch(deleteCoin(id))
    }
  }

  function getTotal() {
    return holdings.length
      ? holdings.reduce(
          (total, item) =>
            parseFloat(total) + item.price * item.qty,
          0
        )
      : 0;
  }

  useEffect(() => {
    dispatch(listHolding())
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 dark:from-gray-700 to-gray-50 dark:to-gray-800 pt-6 dark:text-gray-200">
        <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pt-6 pb-6">
          <h1 className="font-bold text-center md:text-left text-gray-800 dark:text-white text-4xl">
            Portfolio
          </h1>
          <p className="text-xl text-center md:text-left">Track your investment performance</p>
        </div>
        <div className="container md:w-2/3 xl:w-1/2 flex flex-col md:flex-row justify-between items-center mx-auto px-4 py-4">
          <div
            className="flex-grow my-2"
            style={{ flexBasis: "0", width: "80%" }}
          >
            <div className="w-52 md:w-40 lg:w-52 bg-white dark:bg-gray-700 rounded-md border border-gray-300 mx-auto md:mx-0 px-8 md:px-4 lg:px-8 py-3">
              <p className="text-sm flex">
                Current Balance{" "}
                <EyeClose className="inline h-5 ml-1 cursor-pointer" />
              </p>
              <h1 className="font-bold text-gray-700 dark:text-white text-3xl">
                ${getTotal().toFixed(2)}
              </h1>
              <h3 className="text-green-500 text-right font-medium text-sm">
                {(getTotal() * 560).toFixed(2)} FCFA
              </h3>
            </div>
          </div>
          <div
            className="flex-grow flex flex-col items-center md:items-end"
            style={{ flexBasis: "0" }}
          >
            <button
              className="px-4 py-2 inline-block bg-blue-600 text-white font-bold rounded-md min-w-max"
              onClick={() => alertRef.current.openModal()}
            >
              + Add new coin
            </button>
          </div>
        </div>
        <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pb-6">
          <table className="table-auto text-center" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="text-left">Name symbol</th>
                <th className="text-right">Price</th>
                <th className="text-right">Holdings</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="flex items-center text-left py-1.5">
                      <img
                        className="mr-2 w-5 md:w-6"
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                        alt={item.name}
                      />
                      {item.name + " " + item.symbol}
                    </td>
                    <td className="text-right py-1.5">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="text-right py-1.5">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <br />
                      <span className="text-sm">{item.qty + ' ' + item.symbol}</span>
                    </td>
                    <td className="flex justify-end py-1.5">
                      <span
                        className="text-gray-800 cursor-pointer dark:text-gray-200"
                        onClick={() => alertRef.current.openModal(item)}
                      >
                        <FaPencilAlt />
                      </span>
                      <span
                        className="text-red-500 ml-2 cursor-pointer"
                        onClick={() => handleDeleteCoin(item.id)}
                      >
                        <FaTrashAlt />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <MyDialog
        ref={alertRef}
      />
    </>
  );
}
