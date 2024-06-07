import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

function AutoSlider({ array, service, text }) {
  const swiperPropsLogos = {
    slidesPerView:
      array.length <= 4 ? array.length : Math.ceil(array.length / 2) - 1,
    loop: true,
    speed: 2500,
    centeredSlides: true,
    spaceBetween: 30,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  };

  return (
    <Swiper {...swiperPropsLogos}>
      {array.map((img, i) => (
        <SwiperSlide key={"slider" + i}>
          {service ? (
            <Link
              key={"video" + i}
              target="_blank"
              to="https://www.youtube.com/watch?v=VNv91s6zPT0&list=PL2X8sfba3pG0robKHaL3S30CWye2_QBzW"
              className="flex items-center gap-10 w-fit" 
            >
              <span className="font-bold lg:text-4xl text-lg">Watch Video</span>
              <img src={img} alt={img + i} />
            </Link>
          ) : text ? (
            <span
              key={"service" + i}
              className="2xl:text-5xl lg:text-3xl text-xl inline-block my-2 font-bold"
            >
              - {img} -
            </span>
          ) : (
            <img src={img} key={"logo" + i} alt={img + i} />
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
    loop: true,
    speed: 600,
    // modules: [Autoplay],
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
                  {/* seiper img */}
                  <SlideImg>
                    <div className="w-fit">
                      <div className="overflow-hidden relative  w-fit">
                        <img src={img} alt={name} />
                        <div className="absolute right-0 top-0 translate-y-1/2">
                          <img src={quoteImg} alt="quote img" />
                        </div>
                      </div>
                    </div>
                  </SlideImg>
                  {/* CEOS details and shit about them */}
                  <SlideDetails>
                    <div className="space-y-3 w-[80%]">
                      <p className="text-Dark 2xl:text-3xl  lg:text-lg text-sm">
                        {des}
                      </p>
                      <span className="text-Gray 2xl:text-xl block text-sm">
                        {name} - {role}
                      </span>
                      <img src="/rate-stars.png" alt="rating shit" />
                    </div>
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
2xl:py-20
max-lg:py-10
lg:-translate-x-10
bg-Sky
rounded-full
relative
flex
w-full
items-center
justify-center
`;
const SlideImg = tw.div`
lg:translate-x-10
max-lg:w-fit
max-lg:mx-auto
rounded-full
flex 
items-center
`;
export { AutoSlider, SwiperImages };
