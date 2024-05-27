import { FaSearch } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [dataCount, setDataCount] = useState({
    userCount: 0,
    recipeCount: 0,
  });

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/users/user-recipe`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) =>
        setDataCount({
          userCount: data?.data?.userCount,
          recipeCount: data?.data?.recipeCount,
        })
      );
  }, []);
  return (
    <div className="testimonial-section">
      <div className="container py-12 ">
        <div className="flex justify-center items-center my-2">
          <h1 className="bg-red-400 py-2 text-white font-medium text-xl inline-block text-center w-80 rounded-sm">
            Success Stories
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-6 justify-items-center mt-10">
          <div className="bg-white flex flex-col justify-center items-center w-52 py-8 rounded-sm">
            <FaSearch className="text-7xl text-red-400" />
            <span className="pt-3 text-center">
              <h4 className="text-2xl font-bold text-red-500">
                <CountUp end={dataCount?.userCount} />
              </h4>
              <p className="text-gray-500 font-semibold">Users</p>
            </span>
          </div>
          <div className="bg-white p-4 flex flex-col justify-center items-center  w-52 rounded-sm">
            <MdFoodBank className="text-7xl text-red-400" />
            <span className="pt-3 text-center">
              {" "}
              <h4 className="text-2xl font-bold text-red-500">
                <CountUp end={dataCount?.recipeCount} />
              </h4>
              <p className="text-gray-500 font-semibold">Recipes</p>
            </span>
          </div>
          <div className="bg-white p-1 flex flex-col justify-center items-center  w-52 rounded-sm">
            <IoMdPhotos className="text-7xl text-red-400" />
            <span className="pt-3 text-center">
              {" "}
              <h4 className="text-2xl font-bold text-red-500">
                <CountUp end={100} />
              </h4>
              <p className="text-gray-500 font-semibold">Photos</p>
            </span>
          </div>
          <div className="bg-white p-4 flex flex-col justify-center items-center  w-52 rounded-sm">
            <LiaPhotoVideoSolid className="text-7xl text-red-400" />

            <span className="pt-3 text-center">
              {" "}
              <h4 className="text-2xl font-bold text-red-500">
                <CountUp end={30} />
              </h4>
              <p className="text-gray-500 font-semibold">Videos</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
