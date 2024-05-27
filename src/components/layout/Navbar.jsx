import { Link, useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { signInWithGoogle, signOutUser } from "../../utils/firebaseLogin";
import { auth } from "../../firebase";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const imageRef = useRef(null);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

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

  const handlePurchaseCoin = () => {
    navigate("/purchase-coin");
    setIsMenuVisible(false);
  };

  const handleSignOut = () => {
    setIsMenuVisible(false);
    signOutUser();
    toast.success("Sign out Successful");
    navigate("/");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function createUser() {
      const headers = {
        "Content-Type": "application/json",
      };

      const body = {
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/create-user`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      console.log(data);
    }

    createUser();
  }, [user]);

  return (
    <div>
      <nav className="bg-red-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <img
              src="https://i.imgur.com/8aOTOK0.png"
              className="h-12"
              alt="Logo"
            />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white text-white">
              Ranna Banna
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium text-sm flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
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
              {user && (
                <li>
                  <Link
                    to={"add-recipes"}
                    className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                  >
                    Add Recipes
                  </Link>
                </li>
              )}
              {!user && (
                <li>
                  <Link
                    to={"#"}
                    onClick={signInWithGoogle}
                    className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0"
                  >
                    Google Login
                  </Link>
                </li>
              )}

              {user && (
                <div className="relative">
                  <img
                    ref={imageRef}
                    className="inline-block size-6 rounded-full ring-2 ring-white cursor-pointer"
                    src={user?.photoURL}
                    alt="profile_pic"
                    onClick={toggleMenu}
                  />
                  {isMenuVisible && (
                    <div
                      className="absolute -right-2 w-32 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-100 visible transition duration-300 z-50"
                      ref={menuRef}
                    >
                      <ul className="py-1 ">
                        <li
                          onClick={handlePurchaseCoin}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer flex gap-2 items-center "
                        >
                          <RiCoinsLine className="text-yellow-400 text-xl" />
                          Coins
                        </li>
                        <li
                          onClick={handleSignOut}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex items-center gap-2 cursor-pointer"
                        >
                          <RiLogoutCircleRLine className="text-red-400 text-xl" />
                          Log Out
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
