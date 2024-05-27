import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function AutoSlider({array}) {
  const swiperPropsLogos = {
    slidesPerView: 5,
    loop: true,
    speed: 2500,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  };

  return (
    <Swiper {...swiperPropsLogos}>
      {array.map((img) => (
        <SwiperSlide key={img}>
          <img src={img} alt={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const SwiperImages=()=>{
  return 
}


export {AutoSlider}