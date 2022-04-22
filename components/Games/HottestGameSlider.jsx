// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);
import HottestGame from "./HottestGame";

const HottestGameSlider = () => {
  return (
    <Swiper
      spaceBetween={25}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 3.7,
          spaceBetween: 30,
        },
      }}
      className="!p-5 !-mx-5"
    >
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
      <SwiperSlide>
        <HottestGame />
      </SwiperSlide>
    </Swiper>
  );
};

export default HottestGameSlider;
