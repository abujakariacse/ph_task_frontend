import { Link, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useEffect, useState } from "react";
import { dateConverter } from "../utils/dateConverter";
import Recipe from "../components/ui/Recipe";

const RecipeDetail = () => {
  let { id } = useParams();
  const [recipeDetail, setRecideDetail] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/recipes/get-one?id=${id}`)
      .then((res) => res.json())
      .then((data) => setRecideDetail(data?.data));
  }, [id, recipeDetail]);

  useEffect(() => {
    const apiURL = `${
      import.meta.env.VITE_API_URL
    }/recipes/suggestion?country=${recipeDetail?.country}&category=${
      recipeDetail?.category
    }`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setSuggestions(data?.data));
  }, [recipeDetail?.category, recipeDetail?.country]);

  return (
    <div className="testimonial-section">
      <div className="container ">
        <div className="py-5 text-center flex flex-col justify-center items-center">
          <h3 className="text-3xl font-medium text-gray-700">
            {recipeDetail?.recipeName}
          </h3>
          <p className="text-sm font-medium text-center flex items-center gap-1">
            <span className="flex items-center gap-1">
              {" "}
              <CiCalendarDate /> {dateConverter(recipeDetail?.createdAt)}
            </span>
            <span className="flex gap-1 items-center">
              {" "}
              &#44; <FaPenAlt /> {recipeDetail?.creatorEmail}
            </span>
          </p>
          <p className="text-sm font-medium flex items-center gap-1">
            <span className="flex items-center gap-1">
              <FaGlobe />
              {recipeDetail?.country}
            </span>{" "}
            &#44;{" "}
            <span className="flex items-center gap-1">
              <FaEye /> {recipeDetail?.watchCount}
            </span>
          </p>
        </div>
        <div className="w-7/12 mx-auto">
          <img
            className="rounded-sm"
            src="https://i.ibb.co/p3SwWQX/baked-chicken-breast.jpg"
            alt=""
          />
        </div>
        <p className="w-7/12 mx-auto my-4 text-md text-justify text-gray-700">
          {recipeDetail?.recipeDetail}
        </p>
        <div className="flex mx-auto justify-center py-5">
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${recipeDetail?.videoCode}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center mb-5">
          <h3 className="text-sm text-gray-700 font-medium flex items-center gap-2 justify-center">
            <IoBag />
            Purchased By:
          </h3>
          <p className="text-sm text-gray-700">
            {recipeDetail?.purchasedBy?.map((person, index) => (
              <span key={index}>Abu Jakaria &#44;</span>
            ))}
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="text-center py-3 text-gray-700">
            <h3 className="text-sm font-medium">Categories</h3>
            <span className="text-sm">{recipeDetail?.category}</span>
          </div>
          <div className="text-gray-700">
            <h3 className="text-sm font-medium ">Share & Print</h3>
            <span className="flex gap-3 py-2 text-2xl">
              <Link to={"https://facebook.com"}>
                {" "}
                <FaFacebook />
              </Link>
              <Link to={"https://instagram.com"}>
                {" "}
                <FaInstagram />
              </Link>
              <Link to={"https://x.com"}>
                <FaSquareXTwitter />
              </Link>
              <Link to={"https://linkedin.com"}>
                <FaLinkedin />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center py-10 text-2xl font-medium text-gray-700">
          Recommended for You
        </h3>
        <div className="flex justify-center items-center">
          {suggestions?.map((suggestion) => (
            <Recipe key={suggestion?._id} recipe={suggestion}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
