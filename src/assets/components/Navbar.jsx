import React from "react";
import ShantiniketanLogo from "../img/shantiniketan-logo.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [navigation, setNavigation] = React.useState([
    { name: "Home", href: "/" },
    { name: "Information", href: "#information" },
    { name: "Projects", href: "#projects" },
    { name: "Images", href: "#images" },
    { name: "About Us", href: "/about" },
  ]);

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
    console.log(result);
    setNavigation(result);
  }, []);

  return (
    <Disclosure as="nav" className="transition-all dark:bg-lime-500 bg-sky-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
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
                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item, i) => (
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, i) => (
                <Disclosure.Button
                  key={i}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "dark:text-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium transition-all "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
