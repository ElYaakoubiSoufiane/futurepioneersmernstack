
import img from "../../assets/Cultural2.jpg";
import "../../App.css";



import React, { useEffect, useState } from "react";

 import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
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


export default function CulturalActivities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   return(
<>
   
   

   
<section>
  <div
    className="mx-auto max-w-screen-xl h-[800px] mt-10 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden element-shadow rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src={img}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="sf:text-center md:text-left  lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Scientific and Cultural Activities</h2>

        <p className="mt-4 mb-10 text-gray-600">
        The club organizes a cultural and scientific competition every year for students of the school, in addition to providing specific guidance for students in the second year of the baccalaureate.
        </p>

        <Link
        to ="/activities/cultural/pictures"
        className="inline-block rounded bg-[#023047]  px-10 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       View Pictures
      </Link>
      </div>
    </div>
  </div>
</section>
   
   




</>



  )
}
