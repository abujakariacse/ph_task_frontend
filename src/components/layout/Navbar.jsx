import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const imageRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      imageRef.current &&
      !imageRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      <nav className="bg-red-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <img
              src="https://i.ibb.co/LSStRnC/logo.png"
              className="h-12"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              Ranna Banna
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/recipes"}
                  className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to={"add-recipes"}
                  className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                >
                  Add Recipes
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                >
                  Google Login
                </Link>
              </li>

              <div className="relative">
                <img
                  ref={imageRef}
                  className="inline-block size-8 rounded-full ring-2 ring-white cursor-pointer"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile_pic"
                  onClick={toggleMenu}
                />
                {isMenuVisible && (
                  <div
                    className="absolute -right-2 w-32 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-100 visible transition duration-300 z-50"
                    ref={menuRef}
                  >
                    <ul className="py-1 ">
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer flex gap-2 items-center ">
                        <RiCoinsLine className="text-yellow-400 text-xl" />
                        Coins
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex items-center gap-2 cursor-pointer">
                        <RiLogoutCircleRLine className="text-red-400 text-xl" />
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
