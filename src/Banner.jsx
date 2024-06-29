import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "./assent/photo_2023-08-14_20-44-26.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export const Banner = () => {
  return (
    <div className="section" id="home">
      <div className="container mx-auto ">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center mx-10 ">
          <div className=" flex-1 text-center lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[38px] font-bold text-white lg:text-[100px] "
            >
              Mohamed <span>Nagdy</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="  text-[36px] lg:text-[60px] mb-5 font-semibold uppercase leading-2"
            >
              <span className="text-white mr-4"> I am a </span>
              <TypeAnimation
                sequence={["Mern Stack Development", 10000]}
                className="text-teal-500"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center lg:justify-start my-9 mx-3 "
            >
              <button class="contactButton">
                {" "}
                <a href="#contact">contact</a>
                <div class="iconButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="cardd flex lg:justify-start justify-center items-center gap-4"
            >
              <a
                href="https://www.linkedin.com/in/mohamed-nagdy-032b63289/"
                target="_blank"
              >
                <button class="group w-[170px] h-[50px]  hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                  <svg
                    class="w-8 h-8 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span class="border-l-2 px-1">Nagdy</span>
                  <div class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
                    See my profile!
                  </div>
                </button>
              </a>
              <a href="https://github.com/Nagdy29" target="_blank">
                <button class="w-[170px] h-[50px] group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                  <svg
                    class="w-8 h-8 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      class="svg-fill-primary"
                      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                    ></path>
                  </svg>
                  Github
                </button>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("dowm", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-4 flex justify-center"
          >
            <img
              src={img}
              alt=""
              className=" w-80 h-80 lg:w-[550px] lg:h-[550px] rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
