import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-slate-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-700">About</p>
        </div>

        <p className="text-xl mt-20 indent-8">
          Introduce my name is Wahyu Sampurno Adi, I come from Semarang and was born in 2003, with this portfolio I want to tell you about my skills in the field of web developer, at this time I am still learning about it, I am here using
          technology, Reactjs on javascript and JSX as well as using Tailwindcss for styling.
        </p>

        <br />

        <p className="text-xl indent-8">
          I graduated from SMA Kesatrian 2 Semarang in 2020 and I have expertise in web development using HTML5, CSS3, JavaScript, as well as CSS frameworks such as Bootstrap, TailwindCSS and libraries such as ReactJS.
        </p>
      </div>
    </div>
  );
};

export default About;
