import { useEffect } from "react";
import ReactPaginate from 'react-paginate';
import Loader from '../components/Loader'
import Message from '../components/Message'
import {useDispatch, useSelector} from 'react-redux'
import {listCoins, getCoinStatus} from '../actions/coinActions'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import ReactTooltip from "react-tooltip";

export default function MarketCap() {
  const dispatch = useDispatch()

  const coinList = useSelector(state => state.coinList)
  const {loading, error, perPage, coins} = coinList

  const offset = localStorage.offset ? localStorage.offset : perPage
  const currentPage = (offset/perPage) - 1

  const coinStatus = useSelector(state => state.coinStatus)
  const { totalCount } = coinStatus

  function handlePageClick(data){
    let selected = data.selected + 1;
    let new_offset = Math.ceil(selected * perPage);
    dispatch(listCoins(new_offset))
  }

  useEffect(() => {
    dispatch(listCoins())
    dispatch(getCoinStatus())
  }, [dispatch]);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 dark:from-gray-700 to-gray-50 dark:to-gray-800 pt-6 dark:text-gray-200">
          <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pt-4 pb-6">
            <h1 className="font-bold text-center md:text-left text-gray-80 dark:text-white text-4xl">
              MarketCap
            </h1>
            <p className="text-xl">( {totalCount ? (totalCount + ' coins') : ''} ) Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="container md:w-2/3 xl:w-1/2 mx-auto px-4 pb-6">
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <><table className="table-auto text-center" style={{width: "100%"}}>
                  <thead>
                    <tr>
                      <th className="text-left">Name symbol</th>
                      <th className="text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coins.map((coin, index) => {
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
                <ReactTooltip id="next" place="bottom" type="dark" effect="solid" />
                <ReactTooltip id="previous" place="bottom" type="dark" effect="solid" />
                <ReactPaginate
                  forcePage={currentPage}
                  previousLabel={<FaChevronLeft data-tip='Previous' data-for='previous' />}
                  nextLabel={<FaChevronRight data-tip='Next' data-for='next'/>}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={totalCount/perPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  pageClassName={'px-2'}
                  disableInitialCallback={true}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination flex justify-end items-center mt-5'}
                  activeClassName={'active font-bold'}
                />
                </>
               )}
            </div>
      </div>
    </>
  );
}