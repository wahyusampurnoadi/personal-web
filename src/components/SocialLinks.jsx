import React from "react";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsJournalBookmarkFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/wahyu-sampurno-a11187251/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithubAlt size={30} />
        </>
      ),
      href: "https://github.com/wahyusampurnoadi",
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMailOpen size={30} />
        </>
      ),
      href: "mailto:wahyusampurnoadi@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/wahyu_smprna/",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsJournalBookmarkFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={"flex justify-between shadow-2xl items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-900" + " " + style}>
            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
