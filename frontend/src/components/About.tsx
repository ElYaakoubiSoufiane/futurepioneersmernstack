import React, { useEffect } from "react";
import img1 from "./../assets/fp logo.png";
import { motion } from "framer-motion";

const container = {
  hidden: { x: -20, opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5
    },
  },
};
const item = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { bounce: 1, duration: 0.5 },
  },
};
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container p-0 ">
      <div className=" mx-auto pt-8 pb-[100px] ">
        <motion.div
          variants={item}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className=" h-[400px] element-center  "
        >
          <img src={img1} alt="" className="object-cover h-[200px]   " />
        </motion.div>
        <div className=" h-[600px] w-[90%] mx-auto my-auto sm:h-[500px] md:h-[450px]   ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="element-center text-center  md:w-[70%] mx-auto bg-[#003566] text-white rounded-[10px] element-shadow   items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <motion.h1
              variants={item}
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              {" "}
              Definition of the Future Pioneers Club{" "}
            </motion.h1>
            <motion.h2 variants={item} className="pb-[15px]">
              The Future Pioneers Club was established at the National School of
              Applied Sciences in Fez in 2011 by students who carry in their
              hearts the jewel of volunteer work. The club works throughout each
              school season to create a group of activities, whether inside or
              outside the school walls. It is a club that combines religious,
              scientific, cultural and social activities.
            </motion.h2>
          </motion.div>
        </div>
        <div className=" h-[600px] w-[90%] mx-auto my-auto sm:h-[500px] md:h-[450px]   ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center text-center  md:w-[70%] mx-auto rounded-[10px] bg-[#003566] text-white element-shadow  my-6 items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <motion.h1
              variants={item}
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              The goal of the club{" "}
            </motion.h1>
            <motion.h2 variants={item} className="pb-[15px]">
              The Future Pioneers Club, which operates under the Society of
              Student Engineers at the National School of Applied Sciences in
              Fez, aims to encourage the student to be creative, giving, and
              entrepreneurial spirit, as well as to consolidate the student’s
              high scientific and humanitarian values.
            </motion.h2>
          </motion.div>
        </div>
        <div className=" h-[600px] w-[90%] mx-auto my-auto sm:h-[500px] md:h-[450px]   ">
          {" "}
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center my-auto  md:w-[70%] mx-auto text-center rounded-[10px] bg-[#003566] text-white my-6 element-shadow  items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <motion.h1
              variants={item}
              className="font-bold text-3xl md:text-4xl md:py-[10px]"
            >
              {" "}
              Religious activities{" "}
            </motion.h1>
            <motion.h2 variants={item} className="pb-[15px]">
              The club is creating a partnership with the local scientific
              council in Fez to allocate classes for memorizing the Holy Qur’an
              under the slogan “An Engineer Bearing the Book of God.” It is also
              organizing a Qur’anic week during the holy month of Ramadan.
            </motion.h2>
          </motion.div>
        </div>
        <div className=" h-[600px] w-[90%] mx-auto my-auto sm:h-[500px] md:h-[450px]   ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center text-center rounded-[10px] bg-[#003566] text-white element-shadow pX-[0%]   items-center gap-[05px] px-[40px]  flex flex-wrap"
          >
            <motion.h1
              variants={item}
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              About the LAMSAT DIFAE campaign{" "}
            </motion.h1>
            <motion.h2 variants={item} className="pb-[15px]">
              The Touch of Warmth campaign is one of the solidarity and social
              activities that the club works to organize every year. It is a
              voluntary convoy that aims to lift the isolation of the residents
              of isolated areas through a group of social, health, educational,
              training, and recreational projects that benefit all residents of
              these areas, regardless of their ages and genders.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
