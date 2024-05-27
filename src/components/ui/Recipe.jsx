import { IoIosCreate } from "react-icons/io";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Recipe = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [coin, setCoin] = useState(0);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const checkPurchasedBefore = () => {
    const persons = recipe?.purchasedBy;
    const isExist = persons.find((person) => person === user?.email);
    return isExist;
  };

  const handleViewRecipe = (id) => {
    // User not logged in
    if (!user) {
      return toast.warn("You must login first");
    }
    // Creator of the recipe
    if (user && recipe?.creatorEmail === user?.email) {
      navigate(`/recipes/${id}`);
    }

    // User purchased before
    if (user && checkPurchasedBefore()) {
      navigate(`/recipes/${id}`);
    }
    // Not purchased before and haven't enough coin
    if (user && !checkPurchasedBefore() && coin < 10) {
      navigate("/purchase-coin");
    }

    // Not purchased and have enough coin
    if (user && !checkPurchasedBefore() && coin >= 10) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const data = {
      viewerEmail: user?.email,
      creatorEmail: recipe?.creatorEmail,
      recipeId: recipe?._id,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    if (isConfirmed) {
      fetch(`${import.meta.env.VITE_API_URL}/recipes/view-recipe`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      navigate(`/recipes/${recipe?._id}`);
    }
  }, [isConfirmed]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/get-coin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setCoin(data?.data?.coin));
  }, [coin, user?.email]);

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
                {recipe.purchasedBy.length ? "& many more" : "Not seen yet"}
              </span>
            </span>
          </div>
          <div className="px-6 py-4 flex justify-center ">
            <button
              onClick={() => handleViewRecipe(recipe?._id)}
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
