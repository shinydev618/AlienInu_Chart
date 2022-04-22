import Tweek from "./Tweek";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2.2,
          spaceBetween: 18,
        },
      }}
    >
      <SwiperSlide>
        <Tweek />
      </SwiperSlide>
      <SwiperSlide>
        <Tweek />
      </SwiperSlide>
      <SwiperSlide>
        <Tweek />
      </SwiperSlide>
      <SwiperSlide>
        <Tweek />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
