import { useEffect, useState } from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import { categories } from "../utils/categories";
import Recipe from "../components/ui/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const handleCheckboxChange = (event, value) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((categoryId) => categoryId !== value)
      );
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    const apiURL = `${
      import.meta.env.VITE_API_URL
    }/recipes/find?search=${searchInput}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setRecipes(data?.data));
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data?.data));
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    selectedCategories?.forEach((category) => {
      queryParams?.append("category", category);
    });

    const currentUrl = new URL(window.location.href);
    currentUrl.search = queryParams.toString();
    window.history.replaceState({}, "", currentUrl.toString());

    const apiUrl = `${
      import.meta.env.VITE_API_URL
    }/recipes/filter?${queryParams.toString()}`;

    if (selectedCategories.length) {
      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setRecipes(data?.data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [selectedCategories]);

  return (
    <div>
      <div className=" p-4 testimonial-section ">
        <Breadcrumb routeName={"Recipes"}></Breadcrumb>
        <div className="flex pt-4 relative">
          <div className="w-96 bg-white h-screen col-span-4 rounded-sm p-4 sticky top-0">
            <h3 className="text-lg font-medium pb-4">Filters</h3>
            {categories?.map((category) => (
              <div key={category?.id} className="p-2">
                <input
                  type="checkbox"
                  id={category?.id}
                  value={category?.value}
                  name={category?.name}
                  className="cursor-pointer"
                  onChange={() => handleCheckboxChange(event, category?.value)}
                />
                <label
                  htmlFor={category?.id}
                  className="ml-2 text-sm font-medium cursor-pointer select-none"
                >
                  {category?.name}
                </label>
              </div>
            ))}
          </div>
          <div className="col-span-8  w-full ">
            <form onSubmit={handleSubmit}>
              <label
                className="mx-auto sticky top-0 bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-1 px-2 rounded-md gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="Search recipe by name"
                  className="px-6 w-full rounded-sm flex-1 outline-none placeholder:text-sm "
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <button className="w-full md:w-auto px-6 py-3 bg-red-400 outline-none text-white rounded-md">
                  <div className="relative">
                    <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                      <svg
                        className="opacity-0 animate-spin w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>

                    <div className="flex items-center transition-all opacity-1 valid:">
                      <span className="text-xs font-medium whitespace-nowrap truncate mx-auto">
                        Search
                      </span>
                    </div>
                  </div>
                </button>
              </label>
            </form>
            <div className="p-2 flex flex-col justify-center items-center ">
              {recipes?.map((recipe) => (
                <Recipe key={recipe?.id} recipe={recipe}></Recipe>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
