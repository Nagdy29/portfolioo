import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

import img from "./assent/photo_2023-08-14_20-44-26.jpg";
import { useInView } from "react-intersection-observer";
export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex bg-about relative bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top"
            >
              <img src={img} alt="" className="rounded-3xl w-[600px]" />
              <div class="overlay"></div>
            </motion.div>
          </div>
          {/* text */}
          <div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="h2 text-2xl lg:text-4xl text-emerald-500 font-bold ">
                About Me.
              </h2>
              <h3 className="h3 mb-4 mt-2 text-slate-200 ">
                I'm a Freelance Front-end Developer
              </h3>
              <p className="mb-6 text-white font-semibold max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis!
              </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp
                    className="text-teal-700 font-bold"
                    start={0}
                    end={1}
                    duration={3}
                  />
                </div>
                <div className="font-primary text-white font-serif text-sm tracking-[2px]">
                  Years of <br />
                  exprience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-white">
                  <CountUp
                    className="text-teal-700 font-bold"
                    start={0}
                    end={15}
                    duration={3}
                  />
                  +
                </div>
                <div className="font-primary text-white font-serif text-sm tracking-[2px] ">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-white">
                  <CountUp
                    className="text-teal-700 font-bold"
                    start={0}
                    end={13}
                    duration={3}
                  />
                  +
                </div>
                <div className="font-primary text-white font-serif text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                <a href="#contact">Contact</a>
              </button>

              <a
                href="https://drive.google.com/file/d/1XUWa9oi1F42naP9aUW3Og8SwweygsD1-/view?usp=drive_link"
                target="_blank"
                className="text-slate-200 font-medium hover:text-slate-400"
              >
                <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Interface / Download">
                        {" "}
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2"
                          stroke="#f1f1f1"
                          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                          id="Vector"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  Download
                  <div class="absolute flex items-center opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                    Download CV
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
