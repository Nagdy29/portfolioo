import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "./variants";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aetxtp7",
      "template_y9xgiij",
      form.current,
      "via8yvFu96XeNSarF"
    );
    e.target.reset();
  };
  return (
    <>
      <section className="relative top-[500px] lg:top-52" id="contact">
        <div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center items-center flex-col my-32 lg:my-0 "
          >
            <h2 className="text-white text-3xl font-bold lg:text-5xl my-2 ">
              Contact
            </h2>
            <p className="max-w-md text-gray-500 font-sans my-2">
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </motion.div>
          <div className="contact-us">
            <div class="flex flex-col items-center justify-center h-screen dark ">
              <div class="w-full max-w-4xl bg-gray-800 rounded-lg shadow-md p-6 forms">
                <motion.h2
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  class="text-2xl font-bold text-gray-200 mb-4"
                >
                  Email Me 🚀
                </motion.h2>

                <form class="flex flex-wrap" ref={form} onSubmit={sendEmail}>
                  <motion.input
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    type="text"
                    name="name"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Full Name"
                  />
                  <motion.input
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    type="email"
                    name="email"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Email"
                  />
                  <motion.input
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    s
                    type="number"
                    name="phone"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Phone Number"
                  />

                  <motion.input
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    type="date"
                    name="data"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Date of Birth"
                  />
                  <motion.textarea
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    name="message"
                    class="bg-gray-700 gap-3 mx-3 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                    placeholder="Message"
                  ></motion.textarea>

                  <motion.button
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="btn-send flex my-4 mx-3"
                    type="submit"
                  >
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
