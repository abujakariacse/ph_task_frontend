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

const RecipeDetail = () => {
  let { id } = useParams();

  return (
    <div className="testimonial-section">
      <div className="container ">
        <div className="py-5 text-center flex flex-col justify-center items-center">
          <h3 className="text-3xl font-medium text-gray-700">
            Pizza with salami, olives and goat cheese
          </h3>
          <p className="text-sm font-medium text-center flex items-center gap-1">
            <span className="flex items-center gap-1">
              {" "}
              <CiCalendarDate /> October 18, 2020
            </span>
            <span className="flex gap-1 items-center">
              {" "}
              &#44; <FaPenAlt /> Ramson Gorday
            </span>
          </p>
          <p className="text-sm font-medium flex items-center gap-1">
            <span className="flex items-center gap-1">
              <FaGlobe />
              Bangladesh
            </span>{" "}
            &#44;{" "}
            <span className="flex items-center gap-1">
              <FaEye /> 300
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
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Sit amet est et sapien ullamcorper pharetra. Aenean
          ultricies mi vitae est. Mauris placerat eleifend leo. Vestibulum erat
          wisi, condimentum sed, commodo vitae. Donec eu libero sit amet. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
          facilisis.
        </p>
        <div className="flex mx-auto justify-center py-5">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/mgorDuLFk3I"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-center">
          <h3 className="text-sm text-gray-700 font-medium flex items-center gap-2 justify-center">
            <IoBag />
            Purchased By:
          </h3>
          <p className="text-sm text-gray-700">
            <span>Abu Jakaria</span>&#44; <span>Juel Ahmed</span>{" "}
            <span>Maidul Islam </span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="text-center py-3 text-gray-700">
            <h3 className="text-sm font-medium">Categories</h3>
            <span className="text-sm">
              main dish italian hard olives salami
            </span>
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
      <div>{/* Sugesstions depend on category and country */}</div>
    </div>
  );
};

export default RecipeDetail;
