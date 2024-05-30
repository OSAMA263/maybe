import tw from "tailwind-styled-components";
import { logos, services, swiper_data } from "./data";
import TheTeam from "./sections/TheTeam";
import { AutoSlider, SwiperImages } from "../../components/Swipers";
import History from "./sections/History";

export default function About() {
  return (
    <div className="space-y-40">
      <Hero />
      <History />
      <SwiperCEO/>
      <TheTeam/>
    </div>
  );
}

const Hero = () => {
  return (
    <section id="base">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between pt-44">
          {/* header text */}
          <div className="container-layout space-y-20">
            <div className="w-max">
              <h2 className="text-7xl font-thin text-Gray">
                We’re something business
              </h2>
              <h1 className="text-8xl">Consultancy agency</h1>
            </div>
            <HeaderWrapper className="text-xl">
              <span>
                <small className="h-1 align-middle inline-block w-6 rounded-2xl me-2 bg-black"></small>{" "}
                about
              </span>
              <span>Consultancy Firm</span>
              <p>
                We have spent 30+ years on servicing and have everything in one
                place request status updates and interviews.
              </p>
            </HeaderWrapper>
          </div>
          {/* big image with services*/}
          <div className="">
            <img src="/about/hero.png" alt="hero" />
          </div>
        </div>
        {/* ------side image ------- */}
        <div className="h-full me-16">
          <img src="/about/text-image.png" alt="tet image" />
        </div>
      </div>

      {/* services */}
      <ServicesWrapper id="services">
        {services.map(({ icon, title, text }) => (
          <div className="space-y-6 p-20" key={title}>
            <span>
              <img src={icon} alt={title} />
            </span>
            <h4 className="text-3xl">{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </ServicesWrapper>
    </section>
  );
};

// auto swipers
function SwiperCEO() {
  return (
    <section id="swiper-images" className="bg-Sky py-28 space-y-40">
      <div className="container-layout">
        <SwiperImages
          quoteImg="/quote1.png"
          array={swiper_data}
        >
          <SwiperContainer></SwiperContainer>
        </SwiperImages>
      </div>
      {/* auto swiperLogos */}
      <div className="container-layout">
        <AutoSlider array={logos} />
      </div>
    </section>
  );
}
const SwiperContainer=tw.div`
grid
grid-cols-2
relative
[&>div]:border
[&_img]:rounded-full
`
const ServicesWrapper = tw.section`
w-full
bg-Sky
flex
divide-x
justify-between
`;

const HeaderWrapper = tw.div`
flex
gap-16
[&>span]:min-w-max
w-[80%]
`;
