import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Slide1 from "../../src/assets/png/slide-1.png"
import Slide2 from "../../src/assets/png/slide-2.png"
import Slide3 from "../../src/assets/png/slide-3.png"
import Slide4 from "../../src/assets/png/slide-4.png"

import 'swiper/css';

const Slide: React.FunctionComponent = () => {

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide1, Slide2, Slide3, Slide4];

  return (
    <Swiper
      loop={true}
      slidesPerView={"auto"}
      allowTouchMove={false}
      spaceBetween={12}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1000: {
          modules: undefined,
          autoplay: false
        }
      }}
    >
    {
        slides.map((slide, index) => 
        <SwiperSlide key={index}>
            <img src={slide} />
        </SwiperSlide>
        )
    }
    </Swiper>
  )
}

export default Slide

