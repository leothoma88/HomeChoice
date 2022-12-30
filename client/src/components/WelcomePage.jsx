import { Link } from "react-router-dom";
import React from "react";
import Home from "../assets/pexels-binyamin-mellish-106399.jpg";

const WelcomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg m-20 h-2/3 w-2/3 bg-[#715959] grid grid-cols-1 sm:grid-cols-2">
          <div className=" subpixel-antialiased text-center flex items-center font-sans text-lg sm:text-4xl sm: text-white">
            Lets Start Your Home Journey Today!
          </div>
          <div className="font-sans  flex items-center text-7xl text-white">
            <img
              className="rounded-lg h-full"
              href="null"
              alt="house"
              src={Home}
            />
          </div>
        </div>
      </div>
      <div className="mb-8 top-0 flex justify-center items-center">
        <Link to="/questionnaire">
          <button className=" bg-[#715959] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Home Quiz!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
