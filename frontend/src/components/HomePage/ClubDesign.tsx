import imag1 from "../../assets/63110131796835.Y3JvcCw4NTAsNjY0LDAsMA.png";
import { motion } from "framer-motion";
const textAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const imageAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
export default function ClubDesign() {
  return (
    <div className="z-0 ">
      {" "}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ staggerChildren: 0.5 }}
        className=" md:h-[650px] h-[600px] relative flex  element-center  max-w-full mx-auto  "
      >
        <div>
          <motion.div
            variants={imageAnimate}
            className="  hover:-translate-y-1 hover:scale-110 duration-300 element-center"
          >
            <img src={imag1} alt="" className="object-cover h-[200px]  " />
          </motion.div>

          <div className="">
            {" "}
            <motion.div
              variants={textAnimate}
              className="element-center px-[10%] md:px-[20%] text-center  text-black  items-center gap-[05px]  pt-[30px] flex flex-wrap"
            >
              <h1 className="font-bold text-2xl md:text-4xl py-[10px]">
                {" "}
                FUTURE PIONEERS{" "}
              </h1>
              <h2 className="">
                Future Pioneers is a club that aims to create a good atmosphere
                among students and with the community through the free
                initiative of each member to carry out charitable work. Future
                Pioneers is not an ordinary club,it's not like other clubs, it
                is special
              </h2>
            </motion.div>
          </div>
          <motion.h1
            variants={textAnimate}
            className=" pt-[20px]  pb-[30px] text-center text-[#333533] text-2xl font-bold"
          >
            “All successes begin with self-discipline. It starts with you.”
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}
