import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import img1 from "../../assets/Teams/Team1.jpg"
import img2 from "../../assets/Teams/FB_IMG_1699062080488.jpg"
import img3 from "../../assets/Teams/FB_IMG_1699062082772.jpg"
import img4 from "../../assets/Teams/FB_IMG_1699062084991.jpg"
import img5 from "../../assets/Teams/FB_IMG_1699062089427.jpg"
import img6 from "../../assets/Teams/FB_IMG_1699062091709.jpg"
import img7 from "../../assets/Teams/FB_IMG_1699062097550.jpg"
import img8 from "../../assets/Teams/Team.jpg"
import img9 from "../../assets/Teams/Team1.jpg"
import 'swiper/css';
    
    
    
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
    import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
    import './StylePic.css'


const data=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    
    
    ]
  
 

    

    
    
    export default function ReligionActivitiesPict() {
      useEffect(() => {
     
        window.scrollTo(0, 0);
        
      }, []);
      
      return (<>
        <div>
        <br /></div>
    <div className=" py-[80px] h-[900px] ">
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
          
       
          {data.map((image, index) => (
                    <SwiperSlide  key={index} tag="li">
             
                        <img src={image} alt="Slide" className="    mt-[35px]   element-shadow  object-cover "/>
                  
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
        </>
      );
    }
    
    