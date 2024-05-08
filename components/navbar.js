import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="Logo"
                        width="32"
                        height="32"
                        className="w-24"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <Link
                    href="/"
                    className="px-6 py-2 text-white bg-lightBlue rounded-md md:ml-5"
                  >
                    Contacta-nos
                  </Link>
                </Disclosure.Button>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-lightBlue rounded-md md:ml-5"
          >
            Contacta-nos
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
