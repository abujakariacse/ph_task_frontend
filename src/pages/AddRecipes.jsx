import { useState } from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const AddRecipes = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    recipeName: "",
    country: "",
    videoCode: "",
    category: "",
    recipeDetail: "",
    recipeImage: null,
    creatorEmail: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      recipeImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.recipeImage) {
      toast.warn("Please select an image.");
      return;
    }

    setUploading(true);

    const formDataImage = new FormData();
    formDataImage.append("image", formData.recipeImage);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formDataImage,
        }
      );

      if (!response.ok) {
        return toast.error("Network error");
      }

      const data = await response.json();
      const completeFormData = {
        ...formData,
        recipeImage: data.data.url,
      };

      const uploadAbleData = { ...completeFormData, creatorEmail: user?.email };
      console.log(uploadAbleData);
      if (response.status === 200) {
        const headers = {
          "Content-Type": "application/json",
        };
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/recipes/create-recipe`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(uploadAbleData),
          }
        );
        const result = await res.json();
        if (result.success) {
          toast.success("Added successfully");
        }
      }
    } catch (error) {
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
      setFormData({
        recipeName: "",
        country: "",
        videoCode: "",
        category: "",
        recipeDetail: "",
        recipeImage: null,
      });
    }
  };

  return (
    <div className="m-10">
      <Breadcrumb routeName={"Add Recipe"} />
      <div className="bg-white border rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Recipe</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="recipe-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="recipeName"
                  id="recipe-name"
                  value={formData.recipeName}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:outline-none block w-full p-2.5"
                  placeholder="Creamy Garlic Parmesan Pasta"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:outline-none block w-full p-2.5"
                  placeholder="Bangladesh"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="videocode"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Embedded Youtube Video Code
                </label>
                <input
                  type="text"
                  name="videoCode"
                  id="videocode"
                  value={formData.videoCode}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:outline-none block w-full p-2.5"
                  placeholder="IgZQKPyfADk"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>

                <select
                  required
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:outline-none block w-full p-3"
                >
                  <option value="">Choose a category</option>
                  <option value="appetizers">Appetizers</option>
                  <option value="maindishes">Main Dishes</option>
                  <option value="sidedishes">Side Dishes</option>
                  <option value="salads">Salads</option>
                  <option value="soups">Soups</option>
                  <option value="sandwitch">Sandwiches</option>
                  <option value="dessert">Desserts</option>
                  <option value="beverage">Beverages </option>
                  <option value="breakfast">Breakfast/Brunch</option>
                  <option value="snack">Snacks</option>
                  <option value="pasta">Pasta</option>
                  <option value="ricedishes">Rice Dishes</option>
                </select>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Recipe details
                </label>
                <textarea
                  id="product-details"
                  name="recipeDetail"
                  value={formData.recipeDetail}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-4 outline-none focus:outline-none"
                  placeholder="Indulge in the comforting flavors of a classic favorite with this Creamy Garlic Parmesan Pasta recipe..."
                ></textarea>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Recipe Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:outline-none block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className=" border-gray-200 rounded-b mt-5">
              <button
                className={`text-white ${
                  uploading ? "bg-gray-400" : "bg-red-400"
                } font-medium rounded-sm text-base px-8 py-2.5 text-center flex items-center`}
                type="submit"
              >
                {uploading && (
                  <span>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2 animate-spin"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                  </span>
                )}
                {uploading ? "Uploading" : "Save Recipe"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipes;
