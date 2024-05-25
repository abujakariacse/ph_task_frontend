import { IoIosCreate } from "react-icons/io";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Recipe = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // console.log({ isConfirmed });

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  //Will be  dynamic coin form db
  const coin = 10;

  const handleViewRecipe = (id) => {
    if (!user) {
      return toast.warn("You must login first");
    }
    if (user && recipe?.creatorEmail === user?.email) {
      navigate(`/recipes/${id}`);
    }
    if (user && coin < 10) {
      navigate("/purchase-coin");
    }

    if (user && coin >= 10) {
      setShowModal((prev) => !prev);
    }

    /* 
   Case 4: user Logged in and have enough coin
- Show users an Alert for spending 10 coins .
- After confirmation,
- Reduce 10 coin from user, add 1 coin to the creator , insert user
email into the purchased_by array of the recipe, increase
watchCount of that recipe and redirect the user to the recipe
details.


Case 5: user Logged in and already purchase the recipe
- Redirect the user to the recipe details page.

   
   
*/
  };

  useEffect(() => {
    if (isConfirmed) {
      navigate(`/recipes/${recipe?.id}`);
    }
  }, [isConfirmed]);

  return (
    <div>
      <div className="flex px-3 py-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={recipe?.recipeImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 truncate text-gray-700">
              {recipe?.recipeName}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-700 text-sm font-medium flex gap-1 items-center">
                <IoIosCreate /> <span>{recipe?.creatorEmail}</span>
              </span>
              <span className="">
                {" "}
                <span className="text-gray-700 text-sm font-medium flex gap-1 items-center">
                  <FaGlobeAfrica />
                  <span> {recipe?.country}</span>
                </span>
              </span>
            </div>
            <span className="text-gray-700 text-sm font-medium flex gap-1 items-start pt-2">
              <FaCartShopping className="text-lg" />

              <span className="">
                {recipe?.purchasedBy?.slice(0, 2)?.map((person) => (
                  <>{person}, </>
                ))}{" "}
                & many more
              </span>
            </span>
          </div>
          <div className="px-6 py-4 flex justify-center ">
            <button
              onClick={() => handleViewRecipe(recipe?.id)}
              className="inline-block bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out rounded-sm px-4 py-2 text-xs font-semibold text-gray-700 mr-2 outline-none"
            >
              View The Recipe
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} setIsConfirmed={setIsConfirmed} />
      )}
    </div>
  );
};

export default Recipe;
