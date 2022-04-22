import { Fragment, useState, useEffect } from "react";
// import { Box } from "@material-ui/core";
import { Listbox, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import {
  ChevronDownIcon,
  CogIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import SidebarNav from "./../Sidebar/SidebarNav";
import SocialMedia from "../SocialMeida";
import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";
import { useWeb3React } from "@web3-react/core";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
];

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "My tasks", href: "#", current: false },
  { name: "Recent", href: "#", current: false },
];

const Header = () => {
  const [selected, setSelected] = useState(people[1]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const DESKTOP_CONNECTORS = {
    MetaMask: injected,
    WalletConnect: walletConnect,
    BinanceWallet: binance_wallet,
    TrustWallet: trustWallet,
  };
  const walletConnectors = DESKTOP_CONNECTORS;
  const { account, active, activate } = useWeb3React();
  const handleConnect = async () => {
    await activate(walletConnectors["MetaMask"]);
  };

  const get_token_amount = async() => {
    const Web3 = require("web3")
    const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/"))

    web3.eth.getBalance("0x7C7572a2227065321Ce01f444CB1A63A3caA8509", function (err, result) {
      if (err) {
        console.log(err)
      } else {
        alert(web3.utils.fromWei(result, "ether") + " ETH")
      }
    })
  }

  useEffect(() => {
    if (active === true) {
      get_token_amount();
    }
  }, [active]);

  return (
    <header className="w-full bg-brand-main sticky top-0 left-0 shadow-mobile-nav lg:shadow-none px-4 xl:px-9 lg:p-5 z-50">
      <nav className="flex items-center justify-between lg:justify-end">
        <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0 lg:hidden">
          <Image layout="fill" src="/logo.png" alt="Alien lnu logo" />
        </div>
        <div className="flex items-center space-x-3 lg:space-x-5">

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div className="relative">
                <Listbox.Button className="bg-connect-button h-9 flex items-center font-myriad-pro rounded-xl space-x-2 px-3">
                  <span>
                    <img src="/assets/all.svg" alt="" />
                  </span>
                  <span className="hidden md:block text-sm lg:text-base">
                    Ethereum
                  </span>
                  <span>
                    <ChevronDownIcon className="w-3.5 h-3.5" />
                  </span>
                </Listbox.Button>

                {/* <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {people.map(person => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition> */}
              </div>
            )}
          </Listbox>

          <button
            onClick={() => {
              handleConnect();
            }}
            type="button"
            className="h-9 flex items-center border border-brand-green rounded-xl text-xs lg:text-sm text-brand-green hover:bg-brand-green hover:text-black transition duration-200 px-3"
          >
            <svg
              width="15"
              height="15"
              className="hidden lg:inline-block mr-2"
              viewBox="0 0 15 15"
              fill="none"
            >
              <rect
                x="1.01514"
                y="4.76636"
                width="13.125"
                height="9.125"
                rx="2.5"
                stroke="currentColor"
              />
              <path
                d="M11.8901 4.89136V4.01636C11.8901 2.3595 10.547 1.01636 8.89014 1.01636H4.04639C2.38953 1.01636 1.04639 2.3595 1.04639 4.01636V6.76636"
                stroke="currentColor"
              />
            </svg>
            {
              active ? <span>
                {account.slice(0, 6) + "..." + account.slice(-4)}
              </span> : <span>
                Connect
                <span className="hidden md:inline-block">Wallet</span>
              </span>
            }

          </button>

          <div className="hidden lg:flex items-center pl-2">
            <button>
              <CogIcon className="w-6 h-6 text-brand-green" />
            </button>
          </div>

          <button type="button" className="p-1 lg:hidden">
            <MenuIcon
              className="w-6 h-6 text-[#565A5F]"
              onClick={() => setSidebarOpen(true)}
            />
          </button>
        </div>
      </nav>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flexlg:hidden z-[1000]"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative h-full flex-1 flex flex-col max-w-xs w-full pt-8 pb-4 bg-brand-main">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-brand-green"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              <div className="px-6 flex flex-col h-full">
                <div className="relative w-20 h-20 mx-auto">
                  <Image layout="fill" src="/logo.png" alt="Alien lnu logo" />
                </div>
                <div className="pt-8 flex flex-col h-full pb-16">
                  <SidebarNav isMouseOver={true} />

                  <SocialMedia classes="justify-center mt-auto" />
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Header;
