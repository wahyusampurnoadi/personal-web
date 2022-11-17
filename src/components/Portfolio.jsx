import React from "react";
import botChat from "../assets/portfolio/botChat.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import cardProfile from "../assets/portfolio/cardProfile.jpg";
import onlineShop from "../assets/portfolio/onlineShop.jpg";
import personalWeb from "../assets/portfolio/personalWeb.jpg";
import photoPortfolio from "../assets/portfolio/photoPortfolio.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: botChat,
      href: "https://replit.com/@wahyusampurnoadi/BOT",
      link: "https://BOT.wahyusampurnoadi.repl.co",
    },
    {
      id: 2,
      src: onlineShop,
      href: "https://github.com/wahyusampurnoadi/portofolio",
      link: "https://wahyusampurnoadi.github.io/portofolio/",
    },
    {
      id: 3,
      src: cardProfile,
      href: "https://github.com/wahyusampurnoadi/card-profile",
      link: "https://wahyusampurnoadi.github.io/card-profile/",
    },
    {
      id: 4,
      src: personalWeb,
      href: "https://replit.com/@wahyusampurnoadi/portfolio",
      link: "https://portfolio.wahyusampurnoadi.repl.co",
    },
    {
      id: 5,
      src: calculator,
      href: "https://github.com/wahyusampurnoadi/kalkulator",
      link: "https://wahyusampurnoadi.github.io/kalkulator/",
    },
    {
      id: 6,
      src: photoPortfolio,
      href: "https://replit.com/@wahyusampurnoadi/portfolio-foto",
      link: "https://portfolio-foto.wahyusampurnoadi.repl.co",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-slate-900 to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br />
          <br />
          <br />
          <p className="text-4xl font-bold inline border-b-4 border-blue-700">Portfolio</p>
          <p className="py-6">click to know more about my project</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400">
                  Code
                </a>
                <a href={link} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
