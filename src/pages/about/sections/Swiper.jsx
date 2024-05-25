import { logos, swiperData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import tw from "tailwind-styled-components";
import "swiper/css";
import "swiper/css/effect-fade";

export default function SwiperCEO() {
  const swiperPropsCEO = {
    autoplay: { disableOnInteraction: false, delay: 2000 },
    effect: "fade",
    loop: true,
    modules: [Autoplay, EffectFade],
  };

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
    <section id="sliders" className="bg-Sky py-28 space-y-40">
      <Swiper {...swiperPropsCEO}>
        {swiperData.map(({ img, role, name, des, rate }) => (
          <SwiperSlide key={name}>
            <div className="grid grid-cols-2 relative container-layout">
              <div className="border translate-x-10 rounded-full">
                <div className="relative w-fit">
                  <div className="absolute right-0 top-0 translate-y-1/2">
                    <img src="/quote.png" alt="quote img" />
                  </div>
                  <div className="rounded-full w-fit overflow-hidden">
                    <img src={img} alt={name} />
                  </div>
                </div>
              </div>
              {/* CEOS details and shit about them */}
              <div className="relative">
                <SlideDetails>
                  <p className="text-Dark text-2xl">{des}</p>
                  <span className="text-Gray text-xl block">
                    {name} - {role}
                  </span>
                  <p>{rate}</p>
                </SlideDetails>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* auto swiperLogos */}
      <div className="container-layout">
        <Swiper {...swiperPropsLogos}>
          {logos.map((img) => (
            <SwiperSlide key={img}>
              <img src={img} alt={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SlideDetails = tw.div`
border
h-full
py-20
px-32
-translate-x-10
bg-Sky
rounded-full
absolute
space-y-3
`;
