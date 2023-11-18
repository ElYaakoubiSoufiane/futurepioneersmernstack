import React, { useEffect } from 'react';
import pic1 from "../../assets/Social/87723e61-2900-445a-955b-5c069c5514bc.jpg";
import pic2 from "../../assets/Social/IMG_9851.jpg";
// import pic2 from "../../assets/Social/IMG_9851.jpg";
// import pic2 from "../../assets/FB_IMG_1699002360182.jpg";
// import pic3 from "../../assets/FB_IMG_1699002375896.jpg";
// import pic4 from "../../assets/FB_IMG_1699002381406.jpg";
// import pic5 from "../../assets/FB_IMG_1699002387602.jpg";



import 'swiper/css';



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import './StylePic.css'
const  images = [ pic2, pic1];


export default function SocialActivitiesPict() {
  useEffect(() => {
 
    window.scrollTo(0, 0);
    
  }, []);
  
  return (
    
<div className="container pt-[50px] h-[900px] ">
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

