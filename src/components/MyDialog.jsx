import { Fragment, useRef, forwardRef, useState, useImperativeHandle } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon,  } from '@heroicons/react/solid'
import { FaTimes } from 'react-icons/fa'

const coins = [
    { id: 1, name: 'Bitcoin', unavailable: false },
    { id: 2, name: 'Ethereum', unavailable: false },
    { id: 3, name: 'Cardano', unavailable: false },
    { id: 4, name: 'Polkadot', unavailable: true },
    { id: 5, name: 'Cosmos', unavailable: false },
  ]

const MyDialog = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(coins[0])
    const cancelButtonRef = useRef();
    
    function closeModal() {
      setOpen(false);
    }
    
    // function openModal() {
    //   setOpen(true);
    // }
  
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
                    <Listbox value={selectedCoin} onChange={setSelectedCoin}>
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
                            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {coins.map((coin, coinIdx) => (
                                <Listbox.Option
                                key={coinIdx}
                                className={({ active }) =>
                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                        cursor-default select-none relative py-2 pl-10 pr-4`
                                }
                                value={coin}
                                >
                                {({ selectedCoin, active }) => (
                                    <>
                                    <span
                                        className={`${
                                        selectedCoin ? 'font-medium' : 'font-normal'
                                        } block truncate`}
                                    >
                                        {coin.name}
                                    </span>
                                    {selectedCoin ? (
                                        <span
                                        className={`${
                                            active ? 'text-amber-600' : 'text-amber-600'
                                        }
                                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                        >
                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </Listbox>
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
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
    );
  })

  export default MyDialog;