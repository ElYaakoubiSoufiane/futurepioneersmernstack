import React, { useEffect } from "react";
import img2 from "../../assets/compaign2.jpg";
import img3 from "../../assets/campaign.jpg";
import img from "../../assets/fp logo.png";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, x: 20, scale: 0 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { bounce: 0.4, duration: 1 },
  },
};

export default function Campaign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="   top-0 pt-[54px] sm:py-32 lg:px-8">
        <div>
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="mx-auto grid  my-auto sm:h-[500px] md:h-[550px] lg:h-[450px]  "
          >
            <motion.div variants={item} className="w-[100%]">
              <img className="mx-auto h-[120px]" src={img} alt="" />
            </motion.div>
            <figure className=" element-shadow rounded-[10px] bg-[#023047]   w-[70%] mx-auto element-center   mt-10  ">
              <blockquote className=" mx-auto w-[100%] max-w-full   text-center text-xl text-white sm:text-2xl sm:leading-9">
                <div>
                  <motion.h1
                    variants={item}
                    className="font-bold text-3xl w-full py-[10px]"
                  >
                    Definition :
                  </motion.h1>
                  <motion.h2
                    variants={item}
                    className="text-center  mx-4  my-4 "
                  >
                    “ The Touch of Warmth campaign is one of the solidarity and
                    social activities that the club works to organize every
                    year. It is a voluntary convoy that aims to lift the
                    isolation of the residents of isolated areas through a group
                    of social, health, educational, training, and recreational
                    projects that benefit all residents of these areas,
                    regardless of their ages and genders.”
                  </motion.h2>
                </div>
              </blockquote>
            </figure>{" "}
          </motion.div>
          <div className="pb-[30px]">
            <motion.div
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className=" rounded-[10px] w-[90%]  mx-auto  my-auto sm:h-[500px] md:h-[450px]  pb-[30px] "
            >
              {" "}
              <motion.div
                variants={item}
                className="mx-auto w-full md:w-[80%] px-[40px] md:px-[150px] pt-10 "
              >
                <motion.h3
                  variants={container}
                  className="font-bold  bg-[#000000] md:h-[40px] py-auto element-shadow rounded-[10px]  element-center text-white text-center text-2xl "
                >
                  The LAMSA DIFAE Versions
                </motion.h3>
              </motion.div>
              <div>
                <motion.section
                  variants={container}
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ staggerChildren: 0.5 }}
                  className=" element-center space-x-4  "
                >
                  <div className="container mx-auto max-w-full grid grid-cols-1   pt-[30px]    md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 justify-center items-center  ">
                    <motion.div
                      variants={item}
                      className="course-style  bg-white "
                    >
                      <div>
                        <img
                          src={img2}
                          alt="formation image"
                          className="rounded-[10px]  h-[260px] lg:h-[290px] "
                        />
                      </div>
                      <div className="text-black text-2xl font-bold text-center grid grid-cols-1 ">
                        <strong>Version: 7</strong>
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="course-style ">
                      <div>
                        <img
                          src={img3}
                          alt="formation image"
                          className="rounded-[10px]  h-[260px] lg:h-[290px] "
                        />
                      </div>
                      <div className="text-black text-2xl font-bold text-center grid grid-cols-1">
                        <strong>Version: 8</strong>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
