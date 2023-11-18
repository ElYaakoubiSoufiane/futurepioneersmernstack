import React, { useEffect } from 'react';
import pic1 from "../../assets/FB_IMG_1699002353057.jpg";
import pic2 from "../../assets/FB_IMG_1699002360182.jpg";
import pic3 from "../../assets/FB_IMG_1699002375896.jpg";
import pic4 from "../../assets/FB_IMG_1699002381406.jpg";
import pic5 from "../../assets/FB_IMG_1699002387602.jpg";
import pic6 from "../../assets/FB_IMG_1699002102603.jpg";
import pic7 from "../../assets/FB_IMG_1699002118201.jpg";
import pic8 from "../../assets/FB_IMG_1699002123662.jpg";
import pic9 from "../../assets/FB_IMG_1699002128649.jpg";
import pic10 from "../../assets/FB_IMG_1699002138474.jpg";
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
const  images = [pic10, pic9,pic14, pic8,pic12, pic7,pic15, pic6,pic11, pic5, pic4,
  pic13, pic3,
pic2, 




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

