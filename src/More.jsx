import React from "react";
// motion
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// variants
import { fadeIn } from "./variants";
import img1 from "./assent/blog.jpg";
import img2 from "./assent/das.jpg";
import img3 from "./assent/tailReact.jpg";

export const More = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16 p-14">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}

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
                <span className="text-3xl text-white">Blog App</span>
              </div>
              <div className="absolute -bottom-full rounded-full left-12 group-hover:bottom-40 group-hover:left-80  transition-all duration-700 z-50">
                <a
                  href="https://nagdy29.github.io/Web-AddPost/"
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
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl "></div>
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
                <span className="text-3xl text-white">Tailwind Project</span>
              </div>
              <div className="absolute -bottom-full rounded-full left-12 group-hover:bottom-40 group-hover:left-80  transition-all duration-700 z-50">
                <a
                  href="https://nagdy29.github.io/React-tailwand/"
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
