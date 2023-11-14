
import img1 from "../../assets/FB_IMG_1699002353057.jpg";
import img2 from "../../assets/FB_IMG_1699002360182.jpg";
import img3 from "../../assets/FB_IMG_1699002375896.jpg";
import img4 from "../../assets/FB_IMG_1699002381406.jpg";
import img5 from "../../assets/FB_IMG_1699002387602.jpg";
import img6 from "../../assets/FB_IMG_1699002102603.jpg";
import img7 from "../../assets/FB_IMG_1699002118201.jpg";
import img8 from "../../assets/FB_IMG_1699002123662.jpg";
import img9 from "../../assets/FB_IMG_1699002128649.jpg";
import img10 from "../../assets/FB_IMG_1699002138474.jpg";
import "../../App.css";
import { InView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


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
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { bounce: 0.4, duration: 1 },
  },
};

export default function Courses() {
  const controls = useAnimation();
  const handleInView = (inView: any, entry: any) => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];
  return (
    <InView as="div" onChange={handleInView}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" py-[100px] container grid    max-w-full  grid grid-cols-1      md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-[40px] relative "
      >
        {images.map((img) => (
          <motion.section
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div
              variants={item}
              className="  Course-Syl grid  w-[260px] lg:w-[290px] text-center  element-shadow"
              key={img}
            >
              <img
                src={img}
                alt="formation   imge"
                className="rounded-[10px]  h-[260px] lg:h-[290px] "
              />
            </motion.div>
          </motion.section>
        ))}
      </motion.div>
    </InView>
  );
}
