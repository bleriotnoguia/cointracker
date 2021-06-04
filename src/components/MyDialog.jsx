import { Fragment, useRef, forwardRef, useState, useImperativeHandle } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes, FaSearch } from 'react-icons/fa'
import { ChevronDownIcon } from "@heroicons/react/solid";
import {addCoin} from '../actions/holdingActions'
import {useDispatch, useSelector} from 'react-redux'
import { searchCoin } from "../actions/coinActions";

const MyDialog = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const [item, setItem] = useState({qty: ''})
    const cancelButtonRef = useRef();

    const coinSearch = useSelector(state => state.coinSearch)
    const {coins} = coinSearch

    const dispatch = useDispatch()
    
    function closeModal() {
      setSearchItem('')
      setItem({qty: ''})
      setOpen(false);
    }

    function saveCoin(){
      dispatch(addCoin(item.id, item.qty));
      closeModal();
    }

    function handleOnFocus(){
      setActiveSearch(true);
    }

    function handleSearchInput(e){
      var val = e.target.value;
      setSearchItem(val)
      dispatch(searchCoin(val))
    }

    function handleQuantityInput(e){
      setItem({...item, qty: e.target.value})
    }

    function handleSelectedCoin(coin){
      setActiveSearch(false)
      setItem(coin)
    }

    // useEffect(() => {
    //   dispatch(searchCoin())
    // }, [props])
  
    useImperativeHandle(
      ref,
      () => ({
        openModal(item) {
          if(item){
            setItem(item)
          }
          dispatch(searchCoin())
          setOpen(true);
        }
      }),
  )
  
    return (
      <Transition show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            initialFocus={cancelButtonRef}
            static
            open={open}
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
                <form onSubmit={() => saveCoin()}>
                  <div className="flex justify-end text-gray-300 cursor-pointer" onClick={closeModal}>
                      <FaTimes />
                  </div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                    >
                      Add / Update holding
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Select coin</p>
                      {item.name ? <div className="mt-1 flex items-center justify-between px-2 rounded-md shadow-md bg-white">
                        <div>
                          <img
                              className="mr-2 w-4 h-4 md:w-5 md:h-5"
                              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                              alt={item.name}
                              />
                        </div>
                        <div className="w-full pl-1 pr-2 sm:text-sm border-gray-300 rounded-md py-2 text-gray-600" onClick={() => setItem({qty: ''})}>
                          {item.name + ' ' + item.symbol + ' - '}<span className="font-bold">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="w-6">
                          <span className="text-gray-500 sm:text-sm"><ChevronDownIcon /></span>
                        </div>
                        </div> : <div className="mt-1 relative rounded-md shadow-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm"><FaSearch /></span>
                        </div>
                        <input
                            autoComplete="off"
                            autoFocus
                            type="text"
                            name="coin"
                            id="coin"
                            value={searchItem}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                            placeholder="Search"
                            onChange={handleSearchInput}
                            onFocus={handleOnFocus}
                        />
                        {activeSearch ? <div className="rounded-md bg-white shadow-md absolute mt-1 w-full overflow-y-auto overflow-x-hidden max-h-32">
                          <ul className="px-3 py-2">
                            {coins.map((coin, index) => <li className="flex items-center my-1 rounded-md cursor-pointer hover:bg-gray-200" key={index} onClick={() => handleSelectedCoin({...coin, qty: ''})}> <img
                              className="mr-2 w-4 h-4 md:w-5 md:h-5"
                              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                              alt={coin.name}
                              />{coin.name}</li>
                            )}
                          </ul>
                        </div> : ''}
                      </div>}
                      
                    </div>
                    <div className="mt-3">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                          Quantity
                      </label>
                      <div className="mt-1 rounded-md shadow-md">
                          <input
                              type="number"
                              name="quantity"
                              id="quantity"
                              value={item.qty}
                              autoComplete="off"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-2 sm:text-sm border-gray-300 rounded-md py-2"
                              placeholder="0.00"
                              onChange={handleQuantityInput}
                          />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-gray-600">
                      <button
                        disabled={item ? false : true}
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => saveCoin()}
                      >
                        Save
                      </button>
                      <div>
                        <span className="font-bold text-gray-200">Total : ${item.qty ? (item.qty * item.price).toFixed(2) : 0}</span>
                      </div>
                    </div>
                </form>
              </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
    );
  })

  export default MyDialog;