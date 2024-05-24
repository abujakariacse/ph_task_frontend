import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "./Button";
const Banner = () => {
  return (
    <div className="hero-slider rounded">
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
              <h1 className="text-5xl font-semibold break-text">
                Choose from thousands of recipes
              </h1>

              <p className="text-base font-normal ">
                Appropriately integrate technically sound value with scalable{" "}
                <br />
                infomediaries negotiate sustainable strategic theme areas.
              </p>
            </div>
            <div className="mt-6">
              <Button>See Recipies</Button>
              <Button>Add Recipes</Button>
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
              <h1 className="text-5xl font-semibold break-text">
                Discover endless culinary delights
              </h1>

              <p className="text-base font-normal ">
                Seamlessly blend innovative culinary techniques with
                <br />
                timeless recipes to elevate your dining experience.
              </p>
            </div>
            <div className="mt-6">
              <Button>See Recipies</Button>
              <Button>Add Recipes</Button>
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
              <h1 className="text-5xl font-semibold break-text">
                Embrace the flavors of the world
              </h1>

              <p className="text-base font-normal ">
                Explore a symphony of tastes from diverse cultures <br /> and
                culinary traditions, all in one delicious journey.
              </p>
            </div>
            <div className="mt-6">
              <Button>See Recipies</Button>
              <Button>Add Recipes</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
