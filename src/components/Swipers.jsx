import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

function AutoSlider({ array, service, text }) {
  const swiperPropsLogos = {
    slidesPerView: 4,
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
          {service ? (
            <Link
              target="_blank"
              to="https://www.youtube.com/watch?v=VNv91s6zPT0&list=PL2X8sfba3pG0robKHaL3S30CWye2_QBzW"
              className="flex items-center gap-10"
            >
              <span className="text-4xl">Watch Video</span>
              <img src={img} alt={img} />
            </Link>
          ) : text ? (
            <span className="text-5xl inline-block my-2 font-bold">- {img} -</span>
          ) : (
            <img src={img} alt={img} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const SwiperImages = (props) => {
  const { children, array, quoteImg } = props;

  const swiperProps = {
    autoplay: { disableOnInteraction: false, delay: 2500 },
    loop: true,speed:600,
    modules: [Autoplay],
  };
  return (
    <Swiper {...swiperProps}>
      {array.map(({ img, role, name, des }) => (
        <SwiperSlide key={name}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              children: (
                <>
                  {child.props.children}
                  <div className="translate-x-10 rounded-full">
                    <div className="relative w-fit">
                      <div className="absolute right-0 top-0 translate-y-1/2">
                        <img src={quoteImg} alt="quote img" />
                      </div>
                      <div className="w-fit overflow-hidden">
                        <img src={img} alt={name} />
                      </div>
                    </div>
                  </div>
                  {/* CEOS details and shit about them */}
                  <SlideDetails>
                    <p className="text-Dark text-4xl">{des}</p>
                    <span className="text-Gray text-xl block">
                      {name} - {role}
                    </span>
                    <img src="/rate-stars.png" alt="rating shit" />
                  </SlideDetails>
                </>
              ),
            })
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
const SlideDetails = tw.div`
h-full
px-24
py-20
-translate-x-10
bg-Sky
rounded-full
relative
space-y-3
`;

export { AutoSlider, SwiperImages };
