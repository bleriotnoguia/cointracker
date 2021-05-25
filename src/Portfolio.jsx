import { useRef } from "react";
// import axios from "axios";
import response from "./data.json";
import { ReactComponent as EyeClose } from "./img/eye-close.svg"
import MyDialog from "./components/MyDialog"
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

export default function Portfolio() {
  // const [open, setOpen] = useState(false);
  const alertRef = useRef();

  // function closeModal() {
  //   setOpen(false);
  // }

  // function openModal() {
  //   setOpen(true);
  // }
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
  // useEffect(() => {
  //   setOpenDialog(true)
  // }, [])

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100">
          <div className="container md:w-2/3 xl:w-1/2 flex flex-col md:flex-row justify-between items-center mx-auto px-4 py-4">
            <div>
              <h1 className="font-bold text-center md:text-left text-gray-800 text-4xl">Portfolio</h1>
              <p className="text-xl">Track your investment performance</p>
            </div>
            <div className="rounded-md bg-white px-10 py-4 mx-3">
              <p className="text-sm flex">Current Balance <EyeClose className="inline h-5 ml-1 cursor-pointer" /></p>
              <h1 className="font-bold text-gray-700 text-4xl">$3,265.97</h1>
              <h3 className="text-green-500 font-medium text-md">1 796 283 FCFA</h3>
            </div>
            <div>
              <button className="px-5 py-3 inline-block bg-blue-600 text-white font-bold rounded-md min-w-max" onClick={() => alertRef.current.openModal()}>
                + Add new coin
              </button>
            </div>
          </div>
          <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pb-6">
            <table className="table-auto text-center" style={{width: "100%"}}>
              <thead>
                <tr>
                  <th className="text-left">Name symbol</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Holdings</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {response.data.map((coin, index) => {
                  return (
                    <tr key={index}>
                      <td className="flex items-center text-left">
                        <img
                          className="mr-2 w-5 md:w-6"
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                          alt={coin.name}
                          />
                        {coin.name + " " + coin.symbol}
                      </td>
                      <td className="text-right">${coin.quote.USD.price.toFixed(2)}</td>
                      <td className="text-right">$567</td>
                      <td className="flex justify-end"> <FaPencilAlt /> <span className="text-red-500 ml-2"><FaTrashAlt /></span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
      <MyDialog ref={alertRef} />
    </>
  );
}