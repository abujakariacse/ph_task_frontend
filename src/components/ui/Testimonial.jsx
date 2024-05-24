import { FaSearch } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import CountUp from "react-countup";

const Testimonial = () => {
  return (
    <div className="testimonial-section py-6">
      <div className="flex justify-center items-center my-2">
        <h1 className="bg-red-400 py-2 text-white font-medium text-2xl inline-block text-center w-80 rounded-sm">
          Success Stories
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-6 justify-items-center mt-10">
        <div className="bg-white flex flex-col justify-center items-center w-52 rounded-sm">
          <FaSearch className="text-7xl text-red-400" />
          <h4 className="text-3xl font-bold text-red-500">
            <CountUp end={952628} />
          </h4>
          <p className="text-gray-500 font-semibold">Members</p>
        </div>
        <div className="bg-white p-4 flex flex-col justify-center items-center  w-52 rounded-sm">
          <MdFoodBank className="text-7xl text-red-400" />
          <h4 className="text-3xl font-bold text-red-500">
            <CountUp end={3431} />
          </h4>
          <p className="text-gray-500 font-semibold">Recipes</p>
        </div>
        <div className="bg-white p-1 flex flex-col justify-center items-center  w-52 rounded-sm">
          <IoMdPhotos className="text-7xl text-red-400" />
          <h4 className="text-3xl font-bold text-red-500">
            <CountUp end={11354} />
          </h4>
          <p className="text-gray-500 font-semibold">Photos</p>
        </div>
        <div className="bg-white p-4 flex flex-col justify-center items-center  w-52 rounded-sm">
          <LiaPhotoVideoSolid className="text-7xl text-red-400" />

          <h4 className="text-3xl font-bold text-red-500">
            <CountUp end={5443} />
          </h4>
          <p className="text-gray-500 font-semibold">Videos</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
