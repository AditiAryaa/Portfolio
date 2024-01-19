import Heroimage from "../assets/Heroimage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b  via-black from-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col  justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            JavaScript , React and Tailwind
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="  group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300  ">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Heroimage}
            alt="my profile"
            className="rounded-2xl h-4/5  md:w-full  mr-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
