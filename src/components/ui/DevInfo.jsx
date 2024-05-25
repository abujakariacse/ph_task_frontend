import { skills } from "../../utils/skills";

const DevInfo = () => {
  return (
    <div className="testimonial-section">
      <div className="container py-8">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex justify-between gap-16 ">
            <div className="rounded-sm w-full">
              {" "}
              <img
                src="https://i.ibb.co/WsVL6Rc/Fspjr-KOa-UAAasx9.png"
                alt=""
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <div className="">
                <div className="flex justify-center items-center ">
                  <h3 className="py-2 text-black text-xl inline-block text-center w-80 rounded-sm font-semibold">
                    About Me
                  </h3>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="block w-28 bg-red-500 border text-center border-red-500"></span>
              </div>
              <p className="text-sm leading-7 font-medium text-gray-900 text-justify my-3">
                Frontend Web Developer specializing in Javascript, React.js,
                Express.js, TypeScript, Next.js, and other modern Javascript
                libraries.. Proficient in crafting dynamic and responsive user
                interfaces that elevate user experiences. Skilled in leveraging
                modern frontend technologies to build visually stunning and
                highly functional web applications. Passionate about pushing the
                boundaries of web development to create engaging digital
                experiences.
              </p>
              <div className="flex gap-20 my-8">
                <div className="flex flex-col">
                  <h3 className="py-1  text-gray-700  text-xl inline-block text-center rounded-sm font-semibold">
                    Education
                  </h3>
                  <span className="block w-28 text-center bg-red-500 border border-red-500"></span>
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Diploma in Computer Science & Technology
                  </h3>
                  <p className="flex  gap-4 text-sm italic">
                    Dhaka Polytechnic Institute{" "}
                    <li className="list-disc">2019 - 2024</li>
                  </p>
                </div>
              </div>

              <div className="flex gap-28 ">
                <div className="flex flex-col">
                  <h3 className="py-1  text-gray-700  text-xl inline-block text-center rounded-sm font-semibold">
                    Works
                  </h3>
                  <span className="block w-20 text-center bg-red-500 border border-red-500"></span>
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Software Engineer (Frontend)
                  </h3>
                  <p className="flex  gap-4 text-sm italic">
                    Alzaf Limited, Tangail
                    <li className="list-disc">Aug 2023 - Mar 2024</li>
                  </p>
                </div>
              </div>

              <div className="flex gap-32 my-10">
                <div className="flex flex-col">
                  <h3 className="py-1  text-gray-700  text-xl inline-block text-center rounded-sm font-semibold">
                    Skills
                  </h3>
                  <span className="block w-16 text-center bg-red-500 border border-red-500"></span>
                </div>
                <div className="grid grid-cols-7 gap-10 justify-center items-center">
                  {skills?.map((skill) => (
                    <img src={skill?.image} key={skill?.id} width={"45px"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
