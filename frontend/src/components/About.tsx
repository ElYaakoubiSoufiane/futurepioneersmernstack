import React, { useEffect } from "react";
import img1 from "./../assets/fp logo.png";
import { motion } from "framer-motion";

const container = {
  hidden: { x: -30,  scale:0.75 },
  visible: {
  
    x: 0,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 1
    },
  },
};
const item = {
  hidden: { opacity: 0.75, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { bounce: 1, duration: 1 },
  },
};
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container mx-auto pt-8 pb-[100px] ">
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
        <div className=" h-[600px] my-auto sm:h-[500px] md:h-[450px]   ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="element-center text-center  md:w-[70%] mx-auto bg-[#023047] text-white rounded-[10px] element-shadow   items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <h1
        
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              {" "}
              Definition of the Future Pioneers Club{" "}
            </h1>
            <h2 className="pb-[15px]">
              The Future Pioneers Club was established at the National School of
              Applied Sciences in Fez in 2011 by students who carry in their
              hearts the jewel of volunteer work. The club works throughout each
              school season to create a group of activities, whether inside or
              outside the school walls. It is a club that combines religious,
              scientific, cultural and social activities.
            </h2>
          </motion.div>
        </div>
        <div className="  h-[600px] my-auto sm:h-[500px] md:h-[450px]  ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center text-center  md:w-[70%] mx-auto rounded-[10px] bg-[#023047] text-white element-shadow  my-6 items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <h1
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              The goal of the club{" "}
            </h1>
            <h2 className="pb-[15px]">
              The Future Pioneers Club, which operates under the Society of
              Student Engineers at the National School of Applied Sciences in
              Fez, aims to encourage the student to be creative, giving, and
              entrepreneurial spirit, as well as to consolidate the student’s
              high scientific and humanitarian values.
            </h2>
          </motion.div>
        </div>
        <div className="   h-[600px] my-auto sm:h-[500px] md:h-[450px]   ">
          {" "}
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center my-auto  md:w-[70%] mx-auto text-center rounded-[10px] bg-[#023047] text-white my-6 element-shadow  items-center gap-[05px] px-[40px] pt-[30px] flex flex-wrap"
          >
            <h1
              className="font-bold text-3xl md:text-4xl md:py-[10px]"
            >
              {" "}
              Religious activities{" "}
            </h1>
            <h2 className="pb-[15px]">
              The club is creating a partnership with the local scientific
              council in Fez to allocate classes for memorizing the Holy Quran
              under the slogan “An Engineer Bearing the Book of God.” It is also
              organizing a Quranic week during the holy month of Ramadan.
            </h2>
          </motion.div>
        </div>
        <div className=" h-[600px] my-auto sm:h-[600px]  md:w-[70%] mx-auto pt-[50px] md:h-auto ">
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            className="element-center text-center rounded-[10px] bg-[#023047] text-white element-shadow pX-[0%]   items-center gap-[05px] px-[40px]  flex flex-wrap"
          >
            <h1
              className="font-bold text-3xl md:text-4xl py-[10px]"
            >
              About the LAMSA DIFAE campaign{" "}
            </h1>
            <h2 className="pb-[15px]">
              The Touch of Warmth campaign is one of the solidarity and social
              activities that the club works to organize every year. It is a
              voluntary convoy that aims to lift the isolation of the residents
              of isolated areas through a group of social, health, educational,
              training, and recreational projects that benefit all residents of
              these areas, regardless of their ages and genders.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
