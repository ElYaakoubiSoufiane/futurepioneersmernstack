import React, { useEffect } from 'react';
import pic1 from "../../assets/Social/87723e61-2900-445a-955b-5c069c5514bc.jpg";
import pic2 from "../../assets/Social/IMG_9851.jpg";
// import pic2 from "../../assets/Social/IMG_9851.jpg";
// import pic2 from "../../assets/FB_IMG_1699002360182.jpg";
// import pic3 from "../../assets/FB_IMG_1699002375896.jpg";
// import pic4 from "../../assets/FB_IMG_1699002381406.jpg";
// import pic5 from "../../assets/FB_IMG_1699002387602.jpg";

import  pic3 from "../../assets/Social/IMG_9818.jpg"
import  pic4 from "../../assets/Social/campaign.jpg"
import  pic5 from "../../assets/Social/compaign1.jpg"
import  pic6 from "../../assets/Social/compaign2.jpg"
import  pic7 from "../../assets/Social/2e7a8994-a5be-47f2-9e64-fd7feae9f24b.jpg"
import  pic8 from "../../assets/Social/3a9dbd6d-0f87-43aa-8d13-cafdb77a59b4.jpg"
import  pic9 from "../../assets/Social/87723e61-2900-445a-955b-5c069c5514bc.jpg"
import  pic10 from "../../assets/Social/93b36955-85ef-4fa3-9998-3fa1038dfce1.jpg"
import  pic11 from "../../assets/Social/a33bd933-c554-4f16-b76e-e4ec077406bd.jpg"
import  pic12 from "../../assets/Social/a8b606b7-5f30-40a3-979b-3b5f71c63604.jpg"


import 'swiper/css';



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import './StylePic.css'
const  images = [ pic2,
pic1,
pic3,
pic4,
pic5,
pic6,
pic7,
pic8,
pic9,
pic10,
pic11,
pic12,
];


export default function SocialActivitiesPict() {
  useEffect(() => {
 
    window.scrollTo(0, 0);
    
  }, []);
  
  return (
    
<div className="continer_Swiper pt-[50px] h-[900px] ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev ',
         
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      
   
      {images.map((image, index) => (
                <SwiperSlide  key={index} tag="li">
         
                    <img src={image} alt="Slide" className="    mt-[35px]   element-shadow  object-cover "/>
              
                </SwiperSlide>
              ))}
      
  
       

        <div className="slider-controler  ">
          <div className=" swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
         
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className=" swiper-pagination  "></div>
         
        </div>
      </Swiper>
    </div>
  );
}

