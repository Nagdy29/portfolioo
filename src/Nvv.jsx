import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { BsChatSquareFill } from "react-icons/bs";
import { SiSkillshare } from "react-icons/si";

import { Link } from "react-scroll";

export const Nvv = () => {
  return (
    <>
      <nav className="fixed bottom-5 lg:bottom-8 w-full overflow-hidden z-50 text-white">
        <div className="container mx-auto">
          <div className="rounded-full w-full bg-black/30 h-[95px] flex items-center justify-between max-w-[400px] mx-auto px-4">
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-200}
              to="home"
              className="mx-2 cursor-pointer w[80px] flex items-center justify-center h-24"
            >
              <IoHomeSharp />
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="about"
              className="mx-2 cursor-pointer w[80px] flex items-center justify-center h-24"
            >
              <IoPersonSharp />
            </Link>

            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="work"
              className="mx-2 cursor-pointer w[80px] flex items-center justify-center h-24"
            >
              <FaBriefcase />
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="skils"
              className="mx-2 cursor-pointer w[80px] flex items-center justify-center h-24"
            >
              <SiSkillshare />
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="contact"
              className="mx-2 cursor-pointer w[80px] flex items-center justify-center h-24"
            >
              <BsChatSquareFill />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
