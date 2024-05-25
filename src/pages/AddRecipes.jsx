import { useState } from "react";

const AddRecipes = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    country: "",
    videoCode: "",
    category: "",
    recipeDetails: "",
    image: null,
  });

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
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
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
                  name="recipeDetails"
                  value={formData.recipeDetails}
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
                className="text-white bg-red-400 font-medium rounded-sm text-base px-8 py-2.5 text-center"
                type="submit"
              >
                Save Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipes;
