import React from "react";
import ShantiniketanLogo from "../img/shantiniketan-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

function switchDark(theme) {
  if (theme === "s") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  } else if (theme) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [navigation, setNavigation] = React.useState([
    { name: "Home", href: "/" },
    { name: "Information", href: "#information" },
    { name: "Projects", href: "#projects" },
    {
      name: "Images",
      href: "/images",
      dropdown: true,
      droplist: [
        { name: "Primary", href: "/images#primary" },
        { name: "Secondary", href: "/images#secondary" },
        { name: "Sr. Secondary", href: "/images#srsecondary" },
        { name: "All Images", href: "/images#all" },
      ],
    },
    { name: "About Us", href: "/about" },
  ]);

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      switchDark(true);
    } else {
      switchDark(false);
    }
  }, []);

  React.useEffect(() => {
    var lookup = {};
    var result = [];
    for (var item, i = 0; (item = navigation[i++]); ) {
      var name = item.name;
      var href = item.href;

      if (!(name in lookup)) {
        if (href === window.location.pathname) {
          lookup[name] = 1;
          result.push({ ...item, current: true });
        } else {
          lookup[name] = 1;
          result.push(item);
        }
      }
    }
    setNavigation(result);
  }, []);

  return (
    <div className="sticky top-0">
      <Disclosure
        as="nav"
        className="transition-all dark:bg-lime-500 bg-sky-600"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 dark:text-black"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 dark:text-black"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                    src={ShantiniketanLogo}
                    className="block h-14 my-3 ml-5 mr-3"
                    alt="Shantiniketan Logo"
                  /> */}

                    <img
                      className="h-12 w-auto block mr-3"
                      src={ShantiniketanLogo}
                      alt="Shantiniketan Logo"
                    />
                    <span className="font-bold text-xl text-white dark:text-black">
                      Shantiniketan
                    </span>
                  </div>
                  <div className="hidden md:ml-6 md:flex">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item, i) => (
                        <div key={i}>
                          {item.dropdown ? (
                            <Menu
                              as="div"
                              className="relative inline-block text-left"
                            >
                              <div>
                                <Menu.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-900 text-white"
                                      : "dark:text-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white",
                                    "px-3 py-2 rounded-md text-sm font-medium transition-all inline-flex"
                                  )}
                                >
                                  {item.name}
                                  <ChevronDownIcon
                                    className="ml-2 -mr-1 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="px-1 py-1 ">
                                    {item.droplist.map((e, i) => (
                                      <Menu.Item key={i}>
                                        {({ active }) => (
                                          <a
                                            href={e.href}
                                            className={`${
                                              active
                                                ? "bg-sky-600 text-slate-50 dark:bg-lime-500 dark:text-gray-800"
                                                : "text-gray-800"
                                            } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                                          >
                                            {e.name}
                                          </a>
                                        )}
                                      </Menu.Item>
                                    ))}
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          ) : (
                            <a
                              key={i}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "dark:text-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium transition-all "
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item, i) => (
                  <div key={i}>
                    {item.dropdown ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              as="a"
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "dark:text-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white",
                                "flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-all cursor-pointer"
                              )}
                            >
                              <span>{item.name}</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "" : "rotate-180 transform"
                                } h-5 w-5 text-white inline-block`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-4 text-sm bg-gray-500 rounded">
                              {item.droplist.map((e, i) => (
                                <Disclosure.Button
                                  key={i}
                                  as="a"
                                  href={e.href}
                                  className={classNames(
                                    e.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:text-white",
                                    "block px-3 py-2 rounded-md text-base font-medium transition-all"
                                  )}
                                  aria-current={
                                    e.current ? "page" : undefined
                                  }
                                >
                                  {e.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Disclosure.Button
                        key={i}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "dark:text-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium transition-all"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="flex sm:justify-end bg-lime-500 dark:bg-sky-600">
        <div className="grid sm:grid-cols-3 my-2 mx-3 sm:gap-5 gap-2 w-full sm:w-auto">
          <button
            className="bg-slate-300 text-black rounded p-2 text-sm font-medium flex items-center justify-center"
            onClick={() => switchDark(false)}
          >
            <SunIcon className="h-5 w-5 mr-2" /> Light
          </button>
          <button
            className="bg-gray-800 text-white rounded p-2 font-medium flex items-center justify-center text-sm"
            onClick={() => switchDark(true)}
          >
            <MoonIcon className="h-5 w-5 mr-2" /> Dark
          </button>
          <button
            className="bg-yellow-300 text-black rounded p-2 font-medium flex items-center justify-center text-sm"
            onClick={() => switchDark("s")}
          >
            <ComputerDesktopIcon className="h-5 w-5 mr-2" /> System
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
