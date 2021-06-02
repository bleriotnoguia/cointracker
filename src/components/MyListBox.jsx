import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const currencies = [
  { name: "USD" },
  { name: "XAF" }
];

export default function MyListBox() {
  const [selected, setSelected] = useState(currencies[0]);

  return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="flex w-full py-1 pl-2 pr-1 text-left bg-white rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="inset-y-0 right-0 flex items-center pl-1 pointer-events-none">
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
                >
                  {currencies.map((currency, currencyIdx) => (
                    <Listbox.Option
                      key={currencyIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-default select-none relative py-1 pl-4 pr-2`
                      }
                      value={currency}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {currency.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
  );
}
