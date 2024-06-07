import tw from "tailwind-styled-components";
import { logos, services, swiper_data } from "./data";
import TheTeam from "./sections/TheTeam";
import { AutoSlider, SwiperImages } from "../../components/Swipers";
import History from "./sections/History";
import Layout from "../../shared/Layout";
import RevealElement from "../../components/RevealElement";

export default function About() {
  return (
    <Layout>
      <Hero />
      <History />
      <TwoSwipers />
      <TheTeam />
    </Layout>
  );
}

const Hero = () => {
  return (
    <section id="base">
      <div className="flex justify-between">
        <div className="flex flex-col gap-20">
          {/* header text */}
          <div className="container-layout space-y-20">
            <div className="w-max space-y-4">
              <RevealElement y className="overflow-visible">
                <h2 className="xl:text-7xl sm:text-4xl text-2xl font-thin text-Gray">
                  We’re something business
                </h2>
                <h1 className="xl:text-8xl md:text-6xl text-5xl">
                  Consultancy agency
                </h1>
              </RevealElement>
            </div>
            <HeaderWrapper className="text-xl">
              <RevealElement y className="overflow-visible">
                <span>
                  <small className="h-1 align-middle inline-block w-6 rounded-2xl me-2 bg-black"></small>{" "}
                  about
                </span>
                <span>Consultancy Firm</span>
                <p>
                  We have spent 30+ years on servicing and have everything in
                  one place request status updates and interviews.
                </p>
              </RevealElement>
            </HeaderWrapper>
          </div>
          {/* big image with services*/}
          <div className="relative">
            <RevealElement
              className="absolute w-full h-full z-10 !pb-0"
              childClass="absolute w-full h-full bg-white z-10"
              scaleX
              offset={0.4}
              noOpacity
            >
              <div></div>
            </RevealElement>
            <RevealElement offset={0.4} scale noOpacity>
              <img src="/about/hero.png" alt="hero" />
            </RevealElement>
          </div>
        </div>
        {/* ------side image ------- */}
        <div className="h-full me-16 max-lg:hidden">
          <img src="/about/text-image.png" alt="tet image" />
        </div>
      </div>

      {/* services */}
      <ServicesWrapper id="services">
        {services.map(({ icon, title, text }) => (
          <RevealElement key={title} x>
            <div className="space-y-6 2xl:p-20 p-6">
              <span>
                <img src={icon} alt={title} />
              </span>
              <h4 className="lg:text-3xl text-2xl">{title}</h4>
              <p>{text}</p>
            </div>
          </RevealElement>
        ))}
      </ServicesWrapper>
    </section>
  );
};

// auto swipers
export function TwoSwipers() {
  return (
    <section id="swiper-images" className="bg-Sky py-28 space-y-40">
      <div className="container-layout">
        <SwiperImages quoteImg="/quote1.png" array={swiper_data}>
          <SwiperContainer></SwiperContainer>
        </SwiperImages>
      </div>
      {/* auto swiperLogos */}
      <RevealElement rotate={10} className="container-layout">
        <AutoSlider array={logos} />
      </RevealElement>
    </section>
  );
}
const SwiperContainer = tw.div`
grid
lg:grid-cols-2
relative
[&>div]:border
[&_img]:rounded-full
`;
const ServicesWrapper = tw.section`
w-full
bg-Sky
grid
lg:grid-cols-4
grid-cols-2
divide-x
justify-between
`;

const HeaderWrapper = tw.div`
flex
gap-16
[&_span]:min-w-max
[&_span]:block
xl:w-[80%]
max-md:gap-5
max-md:flex-col
`;
