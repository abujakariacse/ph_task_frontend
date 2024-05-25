import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../utils/firebaseLogin";
import Button from "./Button";
const Banner = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="hero-slider rounded my-[0.5px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            className=""
            src="https://i.ibb.co/D9xxPy5/baked-chicken-breast.jpg"
            alt=""
          />
          <div className=" absolute text-white text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold break-text">
                Choose from thousands of recipes
              </h1>

              <p className="text-sm font-medium ">
                Appropriately integrate technically sound value with scalable{" "}
                <br />
                infomediaries negotiate sustainable strategic theme areas.
              </p>
            </div>
            <div className="mt-6">
              <Button url={"/recipes"}>See Recipies</Button>
              {user ? (
                <Button url={"/add-recipes"}>Add Recipes</Button>
              ) : (
                <button
                  onClick={signInWithGoogle}
                  className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear"
                >
                  Add Recipes
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co/0MT08hS/homemade-chicken-tikka-masala.jpg"
            alt=""
          />
          <div className=" absolute text-white text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold break-text">
                Discover endless culinary delights
              </h1>

              <p className="text-sm font-medium ">
                Seamlessly blend innovative culinary techniques with
                <br />
                timeless recipes to elevate your dining experience.
              </p>
            </div>
            <div className="mt-6">
              <Button url={"/recipes"}>See Recipies</Button>
              {user ? (
                <Button url={"/add-recipes"}>Add Recipes</Button>
              ) : (
                <button
                  onClick={signInWithGoogle}
                  className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear"
                >
                  Add Recipes
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co/0MT08hS/homemade-chicken-tikka-masala.jpg"
            alt=""
          />
          <div className=" absolute text-white text-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-semibold break-text">
                Embrace the flavors of the world
              </h1>

              <p className="text-sm font-medium ">
                Explore a symphony of tastes from diverse cultures <br /> and
                culinary traditions, all in one delicious journey.
              </p>
            </div>
            <div className="mt-6">
              <Button url={"/recipes"}>See Recipies</Button>
              {user ? (
                <Button url={"/add-recipes"}>Add Recipes</Button>
              ) : (
                <button
                  onClick={signInWithGoogle}
                  className="bg-red-400 px-3 py-2 rounded font-medium mr-3 hover:bg-green-500 transition-all duration-300 ease-linear"
                >
                  Add Recipes
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
