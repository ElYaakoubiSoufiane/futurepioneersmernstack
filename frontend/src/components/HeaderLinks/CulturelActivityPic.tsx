import React, { useEffect } from 'react';

import pic11 from "../../assets/Cultural/IMG_2760.jpg";
import pic12 from "../../assets/Cultural/IMG_2765.jpg";
import pic13 from "../../assets/Cultural/IMG_2766.jpg";
import pic14 from "../../assets/Cultural/IMG_2767.jpg";
import pic15 from "../../assets/Cultural/IMG_2768.jpg";


import 'swiper/css';



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import './StylePic.css'
const  images = [,pic14,pic12 ,pic15 ,pic11, 
  pic13,
 




];


export default function CulturalActivitiesPict() {
  useEffect(() => {
 
    window.scrollTo(0, 0);
    
  }, []);
  
  return (
    
    
      
     
        
    <div className=" continer_Swiper py-[100px] h-[800px] ">
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
          
      
           
    <div>
    <div className="slider-controler    ">
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

