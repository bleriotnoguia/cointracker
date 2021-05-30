import { Fragment, useRef, forwardRef, useState, useImperativeHandle } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from '@headlessui/react'
import { SelectorIcon,  } from '@heroicons/react/solid'
import { FaTimes, FaSearch } from 'react-icons/fa'
import axios from "axios";

const coins = [
    { id: 1, name: 'Bitcoin' },
    { id: 1027, name: 'Ethereum' },
    { id: 2010, name: 'Cardano' },
    { id: 6636, name: 'Polkadot' },
    { id: 3794, name: 'Cosmos' },
  ]

const MyDialog = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const cancelButtonRef = useRef();
    
    function closeModal() {
      setOpen(false);
    }

    function saveCoin(){
      setOpen(false);
    }

    function handleOnFocus(){
      setActiveSearch(true);
    }

    function handleOnBlur(){
      setActiveSearch(false)
    }

    function handleOnChange(e){
      setSearchItem(e.target.value)
      // Aller recuperer la liste des 10 premieres selections

      // axios.get

      // Au bout du scroll on recuperère les 10 prochaines selections

      // console.log(searchItem)
    }
  
    useImperativeHandle(
      ref,
      () => ({
        openModal() {
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-end text-gray-300 cursor-pointer" onClick={closeModal}>
                    <FaTimes />
                </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add / Update holding
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Select coin</p>
                    <div className="mt-1 relative rounded-md shadow-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm"><FaSearch /></span>
                      </div>
                      <input
                          type="text"
                          name="price"
                          id="price"
                          value={searchItem}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="Search"
                          onChange={handleOnChange}
                          onFocus={handleOnFocus}
                          onBlur={handleOnBlur}
                      />
                      {activeSearch ? <div className="rounded-md bg-white shadow-md absolute mt-1 w-full overflow-y-auto overflow-x-hidden h-32">
                        <ul className="px-3 py-2">
                          {coins.map((coin, index) => <li className="flex items-center my-1" key={index}> <img
                            className="mr-2 w-4 h-4 md:w-5 md:h-5"
                            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                            alt={coin.name}
                            />{coin.name}</li>
                          )}
                        </ul>
                      </div> : ''}
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                        Quantity
                    </label>
                    <div className="mt-1 rounded-md shadow-md">
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                            placeholder="0.00"
                        />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center text-gray-600">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={saveCoin}
                    >
                      Save
                    </button>
                    <div>
                      <span className="font-bold">Total :</span> Quantity x Price
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
    );
  })

  export default MyDialog;

 function CoinListBox(){
   const [selectedCoin, setSelectedCoin] = useState(coins[0])

   return <Listbox value={selectedCoin} onChange={setSelectedCoin}>
              <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selectedCoin.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                  />
                  </span>
              </Listbox.Button>
              <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <Listbox.Options className="w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {coins.map((coin, coinIdx) => (
                      <Listbox.Option
                      key={coinIdx}
                      className={({ active }) =>
                          `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-4 pr-4`
                      }
                      value={coin}
                      >
                      <div className="flex">
                            <img
                              className="mr-2 w-5 md:w-6"
                              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                              alt={coin.name}
                            />
                            <span className={'font-normal block truncate'} >
                                {coin.name}
                            </span>
                          </div>
                      </Listbox.Option>
                  ))}
                  </Listbox.Options>
              </Transition>
              </div>
          </Listbox>
  }