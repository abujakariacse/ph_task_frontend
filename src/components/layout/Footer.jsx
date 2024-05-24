import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="testimonial-section py-12">
      <div className="text-grey-700">
        <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5 flex flex-col justify-items-center items-center">
            <img
              src="https://i.ibb.co/LSStRnC/logo.png"
              className="h-16"
              alt="Logo"
            />
            <h3 className="font-bold text-xl text-grey-700">Ranna Banna</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-grey-700 font-bold">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-grey-700 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-grey-700 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-grey-700 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-grey-700 font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-grey-700 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-grey-700 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-grey-700 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-grey-700 font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="#">
              36/5, Kaligonj, Nageswari, Kurigram
              <span className="text-grey-700 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="#">
              contact@rannabanna.com
              <span className="text-grey-700 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className=" pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link to={"https://facebook.com/abujakariacse"}>
              {" "}
              <FaFacebook className="text-3xl m-2" />
            </Link>
            <Link to={"https://instagram.com/abujakariacse"}>
              <FaInstagram className="text-3xl m-2" />
            </Link>
            <Link to={"https://x.com/abujakariacse"}>
              <FaXTwitter className="text-3xl m-2" />
            </Link>
            <Link to={"https://linkedin.com/in/abujakariacse"}>
              <FaLinkedin className="text-3xl m-2" />
            </Link>
          </div>
          <div className="my-5">
            © Copyright 2024. Ranna Banna All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
