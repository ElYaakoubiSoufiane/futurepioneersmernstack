import React, { useState } from "react";
import imag1 from "../../assets/413-4139803_unknown-profile-profile-picture-unknown.png";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, x: 20, scale: 0 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: 0.4, duration: 0.5 
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  visible: {
   
    opacity: 1,
    transition: { bounce: 0.4, duration: 0.5 },
  },
};
export default function TeamSection() {
  const controls = useAnimation();
  const handleInView = (inView: any, entry: any) => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };
  const [testData, setTestData] = useState([
    {
      id: 0,
      desc: "PRESIDENT  ",
      FILEIERE: "Embedded Systems and Industrial Intelligence",

      name: "Mohamed Touiouel",
    },
    {
      id: 1,
      desc: "General clerk",
      FILEIERE: "Mechanical Engineering And Automated Systems",
    
      name: "Jaouad Abdelaoui",
    },
    {
      id: 2,
      desc: "MEMBER",
      FILEIERE: "Embedded Systems and Industrial Intelligence",
      name: "Mohamed Amkrane",
    },
    {
      id: 3,
      desc: "MEMBER",
      FILEIERE: "Embedded Systems and Industrial Intelligence",
      name: "El Yaakoubi Soufiane",
    },
  ]);
  return (
    <section className=" container max-w-full ">
      <div className=" container mx-auto elment-center  pb-[100px] ">
        <div className="    element-center relative  ">
          <InView as="div" onChange={handleInView}>
            <motion.div
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="grid    max-w-full  md:grid-cols-1 lg:grid-cols-2 gap-[40px] relative "
            >
              <motion.div
                variants={item}
                className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  bg-[#003566]    w-[300px] md:w-[500px]   rounded-[10px] p-[20px] element-shadow"
              >
                <div className="  grid  h-[70px]   grid-rows-2 text-center ">
                  <div className="element-center  pb-[5px]">
                    <img
                      src={imag1}
                      alt=""
                      className="w-[60px] h-[60px]  rounded-[50%] object-contain"
                    />
                  </div>

                  <div className="">
                    <strong className="text-white text-2xl  block m-[6px]">
                      {testData[0].name}
                    </strong>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <h1 className="text-white text-sm font-bold tracking-[0.8px] m-[10px]">
                    {testData[0].desc}
                  </h1>
                  <h3 className="text-white"> {testData[0].FILEIERE}</h3>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 bg-[#003566]   w-[300px] md:w-[500px]   rounded-[10px] p-[20px] element-shadow"
              >
                <div className="  grid  h-[70px]  grid-rows-2 text-center ">
                  <div className="element-center pb-[5px]">
                    <img
                      src={imag1}
                      alt="image"
                      className="w-[60px] h-[60px]   rounded-[50%] object-contain"
                    />
                  </div>

                  <div className="">
                    <strong className="text-white text-2xl  block m-[6px]">
                      {testData[1].name}
                    </strong>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <h1 className="text-white text-sm font-bold tracking-[0.8px] m-[10px]">
                    {testData[1].desc}
                  </h1>
                  <h3 className="text-white"> {testData[0].FILEIERE}</h3>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 bg-[#003566]   w-[300px] md:w-[500px]   rounded-[10px] p-[20px] element-shadow"
              >
                <div className="  grid  h-[70px]  grid-rows-2 text-center ">
                  <div className="element-center pb-[5px]">
                    <img
                      src={imag1}
                      alt="img"
                      className="w-[60px] h-[60px]   rounded-[50%] object-contain"
                    />
                  </div>

                  <div className="">
                    <strong className="text-white text-2xl  block m-[6px]">
                      {testData[2].name}
                    </strong>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <h1 className="text-white text-sm font-bold tracking-[0.8px] m-[10px]">
                    {testData[2].desc}
                  </h1>
                  <h3 className="text-white"> {testData[0].FILEIERE}</h3>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 bg-[#003566]   w-[300px] md:w-[500px]   rounded-[10px] p-[20px] element-shadow"
              >
                <div className="  grid  h-[70px]  grid-rows-2 text-center ">
                  <div className="element-center pb-[5px]">
                    <img
                      src={imag1}
                      alt="img"
                      className="w-[60px] h-[60px]   rounded-[50%] object-contain"
                    />
                  </div>

                  <div className="">
                    <strong className="text-white text-2xl  block m-[6px]">
                      {testData[3].name}
                    </strong>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <h1 className="text-white text-sm font-bold tracking-[0.8px] m-[10px]">
                    {testData[3].desc}
                  </h1>
                  <h3 className="text-white"> {testData[0].FILEIERE}</h3>
                </div>
              </motion.div>
            </motion.div>
          </InView>
        </div>
      </div>
    </section>
  );
}
