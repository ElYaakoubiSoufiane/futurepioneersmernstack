import React, { useEffect } from 'react';
import pic1 from "../../assets/Religieux/IMG_2769.jpg";
import pic2 from "../../assets/Religieux/IMG_2770.jpg";
import pic3 from "../../assets/Religieux/IMG_2771.jpg";
import pic4 from "../../assets/Religieux/IMG_2772.jpg";
import pic5 from "../../assets/Religieux/IMG_2773.jpg";
import pic6 from "../../assets/Religieux/IMG_2774.jpg";
import pic7 from "../../assets/Religieux/IMG_2777.jpg";
import pic8 from "../../assets/Religieux/IMG_2774.jpg";
import pic9 from "../../assets/Religieux/IMG_2779.jpg";



import 'swiper/css';



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import './StylePic.css'
const  images = [
 pic9, pic8, pic7, pic6, pic5, pic4, pic3, pic2, pic1
];


export default function ReligionActivitiesPict() {
  useEffect(() => {
 
    window.scrollTo(0, 0);
    
  }, []);
  
  return (
    
<div className="continer_Swiper py-[100px] h-[800px] ">
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
         
                    <img src={image} alt="Slide" className="   mt-[35px]    element-shadow  object-cover "/>
              
                </SwiperSlide>
              ))}
      
  
       
<div>
<div className="slider-controler   ">
          <div className=" swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
         
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className=" swiper-pagination  "></div>
         
        </div></div>
     
      </Swiper>
    </div>
  );
}

