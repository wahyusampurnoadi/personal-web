import React from "react";
import HeroImage from "../assets/heroImage1.png";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front-End Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have expertise in the field of front-end developers, namely using programming languages such as <span className="underline decoration-yellow-500 font-bold">JavaScript</span> with{" "}
            <span className="underline decoration-sky-600 font-bold">React</span> and frameworks such as <span className="underline decoration-purple-500 font-bold">bootstrap</span> and{" "}
            <span className="underline decoration-sky-300 font-bold">tailwindcss</span>.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer focus:ring-2 shadow-2xl">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={20} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <br />
          <br />
          <br />
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full shadow-2xl" />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
