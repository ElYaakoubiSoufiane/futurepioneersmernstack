
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
import imag1 from "../../assets/413-4139803_unknown-profile-profile-picture-unknown.png";

import { InView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";


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

export default function Activities() {
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

  const data=[{
    desc:"The club is creating a partnership with the local scientific council in Fez to allocate classes for memorizing the Holy Quran under the slogan “An Engineer Bearing the Book of God.” It is also organizing a Quranic week during the holy month of Ramadan.",
  name:"Religin",
  chefDepartement:"Soufiane Elyaakoubi",
    
    
    
    },
    {
    desc:"Social establishments receive special attention from the club, which organizes a blood donation campaign within the institution, as well as other voluntary activities, one of which is one of the most notable is HAMLAT LAMSAT DIFAE ",
  name:"sdfsdf",
  chefDepartement:"sdfsdf",
    
    
    
    },
    {
    desc:"The club organizes a cultural and scientific competition every year for students of the school, in addition to providing specific guidance for students in the second year of the baccalaureate.",
  name:"sdfsdf",
  chefDepartement:"sdfsdf",
    
}]
  const images = [img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];
  return (
    // <InView as="div" onChange={handleInView}>
  
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto  w-full max-w-2xl ">
        <h2 className="text-3xl font-bold tracking-tight element-center text-gray-900 sm:text-4xl">Activities</h2 >
        <p className="mt-2 text-lg leading-8 text-center element-center text-gray-600">Know more about Future Pioneers activities </p >
      </div>
      <hr className="my-2 border-black w-[90%] mx-auto  sm:mx-auto " />

    {/* //     variants={container}
    //     initial="hidden"*/ }
   <div   className="mx-auto  mt-5 grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article  className="flex max-w-xl h-[230px]  bg-[#003566] flex-col element-shadow rounded-[10px] items-start justify-between">
          <div className="element-center w-full "> <div className=" flex items-center gap-x-4 text-xs">
     <h1 className="text-2xl font-bold tracking-tight  text-white py-3  sm:text-2xl">Religious Activities</h1>
      
          </div ></div>
         
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
           
            </h3>
            <p className="mt-5 line-clamp-3 px-10 md:px-4 text-sm leading-6 mx-auto text-gray-400">{data[0].desc}</p >
          </div>
          <div className=" mx-auto relative my-auto flex items-center gap-x-4">
          <div className="">
          <img src={imag1} alt="" className="h-10 w-10  rounded-full bg-gray-50" />
</div>
            <div className="text-sm  w-[50%]  leading-6">
              <p className="font-semibold text-center text-white">
             
                  <span className=" absoluteinset-0"></span >
             Soufiane Elyaakoubi
               
              </p>
            
         
        </div>
      
         <Link
         to="/activities/religion"
                   className=" bg-[#ffc300] w-[110px] right-1 text-[15px]  text-black text-center hover:bg-white hover:border hover:border-black hover:text-black  font-bold py-2 px-3 rounded-[10px]"

         >
         
         <button>Read More</button>
         </Link>
        
            
          </div>
        </article>
        <article  className="flex max-w-xl h-[230px]  bg-[#003566] flex-col element-shadow rounded-[10px] items-start justify-between">
          <div className="element-center w-full "> <div className=" flex items-center gap-x-4 text-xs">
     <h1 className="text-2xl font-bold tracking-tight  text-white py-3  sm:text-2xl">Social Activities</h1>
      
          </div ></div>
         
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
           
            </h3>
            <p className="mt-5 line-clamp-3 px-10 md:px-4 text-sm leading-6 mx-auto text-gray-400">{data[1].desc}</p >
          </div>
          <div className=" mx-auto relative my-auto flex items-center gap-x-4">
          <div className="">
          <img src={imag1} alt="" className="h-10 w-10  rounded-full bg-gray-50" />
</div>
            <div className="text-sm  w-[50%]  leading-6">
              <p className="font-semibold text-center text-white">
             
                  <span className=" absoluteinset-0"></span >
             Soufiane Elyaakoubi
               
              </p>
            
         
        </div>
      
         <Link
         to="/activities/social"
                   className=" bg-[#ffc300] w-[110px] right-1 text-[15px]  text-black text-center hover:bg-white hover:border hover:border-black hover:text-black  font-bold py-2 px-3 rounded-[10px]"

         >
         
         <button>Read More</button>
         </Link>
        
            
          </div>
        </article>
        <article  className="flex max-w-xl h-[230px]  bg-[#003566] flex-col element-shadow rounded-[10px] items-start justify-between">
          <div className="element-center w-full "> <div className=" flex items-center gap-x-4 text-xs">
     <h1 className="text-2xl font-bold tracking-tight  text-white p-2 text-center mx-auto  sm:text-2xl">Scientific and cultural activities</h1>
      
          </div ></div>
         
          <div className="group relative">
            <h3 className="mt-1text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
           
            </h3>
            <p className="mt-5 line-clamp-3 px-10 md:px-4 text-sm leading-6 mx-auto text-gray-400">{data[2].desc}</p >
          </div>
          <div className=" mx-auto relative my-auto flex items-center gap-x-4">
          <div className="">
          <img src={imag1} alt="" className="h-10 w-10  rounded-full bg-gray-50" />
</div>
            <div className="text-sm  w-[50%]  leading-6">
              <p className="font-semibold text-center text-white">
             
                  <span className=" absoluteinset-0"></span >
             Soufiane Elyaakoubi
               
              </p>
            
         
        </div>
      
         <Link
         to="/activities/cultural"
                   className=" bg-[#ffc300] w-[110px] right-1 text-[15px]  text-black text-center hover:bg-white hover:border hover:border-black hover:text-black  font-bold py-2 px-3 rounded-[10px]"

         >
         
         <button>Read More</button>
         </Link>
        
            
          </div>
        </article>
       
      
       

</div>
</div>
      </div>
  
  );
}
