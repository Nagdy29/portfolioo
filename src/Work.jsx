import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "./variants";
// import images
import img1 from "./assent/movies.jpg";
import img2 from "./assent/das.jpg";
import img3 from "./assent/ec.jpg";
import { Link } from "react-router-dom";

export const Work = () => {
  return (
    <div className="section my-12" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="mx-8">
              <h2 className="h2 leading-tight text-white text-3xl lg:text-5xl font-bold my-4">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-10 font-mono text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                veniam enim ad repudiandae odio recusandae accusantium totam
                dolorem harum eum.
              </p>
              <Link to="more">
                <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p class="z-10">Discover More</p>
                </button>
              </Link>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">Front end</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Movies app</span>
              </div>
              <div className="absolute -bottom-full rounded-full left-12 group-hover:bottom-40 group-hover:left-80  transition-all duration-700 z-50">
                <a
                  href="https://nagdy29.github.io/Movies-react/"
                  className="text-white text-2xl hover:text-slate-400 text-center"
                  target="_blank"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <img
                src={img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">Web Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Dashbord</span>
              </div>
              <div className="absolute -bottom-full rounded-full left-12 group-hover:bottom-40 group-hover:left-80  transition-all duration-700 z-50">
                <a
                  href="https://nagdy29.github.io/Dashbord/"
                  className="text-white text-2xl hover:text-slate-400 text-center"
                  target="_blank"
                >
                  View{" "}
                </a>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">Modern Website</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Ecommerce</span>
              </div>
              <div className="absolute -bottom-full rounded-full left-12 group-hover:bottom-40 group-hover:left-80  transition-all duration-700 z-50">
                <a
                  href="https://nagdy29.github.io/Ecommerce-App/"
                  className="text-white text-2xl hover:text-slate-400 text-center"
                  target="_blank"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
