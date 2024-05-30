import { ArrowButton } from "../../components/Buttons";
import SectionHeader from "../../components/SectionHeader";
import ThreeAvatars from "../../components/ThreeAvatars";
import { numbers, service_plan, services, swiper_data } from "./data";
import FormSection from "./sections/FormSection";
import ServicePlan from "./sections/ServicePlan";
import CountUpNumber from "../../components/CountUpNumber";
import tw from "tailwind-styled-components";
import { AutoSlider, SwiperImages } from "../../components/Swipers";

export default function Service() {
  return (
    <div className="pt-40 space-y-32">
      <div className="container-layout">
        <div className="flex justify-between">
          <SectionHeader
            title="Services"
            header="What we offer"
            className="[&_h1]:text-8xl"
            text="Unsere Services Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam suscipit nulla fuga porro, libero voluptas illum nobis impedit officia doloribus! Ipsa quis aspernatur consequatur beatae at explicabo eveniet, architecto culpa."
          />
          <div className="space-y-4 text-balance">
            <p>Happy clients have been boost their health</p>
            <p>4.9 star (2.2k reviews)</p>
            <ThreeAvatars />
          </div>
        </div>
      </div>
      <img src="/service/hero-image.png" alt="hero" className="ms-auto" />
      {/* her image */}
      {/* marquee */}
      <AutoSlider array={array} text />
      {/* servicese */}
      <ServicesSection />
      {/* couting numbers */}
      <div className="bg-Dark-blueish py-40">
        <div className="container-layout flex justify-between gap-x-36">
          {numbers.map((num) => (
            <CountUpNumber
              key={num.title}
              {...num}
              className="text-Orange [&>small]:bg-Dark-blueish [&>span]:text-white"
            />
          ))}
        </div>
      </div>
      {/* services plans */}
      <section
        id="services-plans"
        className="container-layout grid grid-cols-3 gap-x-36"
      >
        {service_plan.map((service) => (
          <ServicePlan key={service.title} {...service} />
        ))}
      </section>
      {/* swiper images reviews? */}
      <div className="container-layout">
        <SwiperImages quoteImg={"/quote2.png"} array={swiper_data}>
          <SwiperWrapper></SwiperWrapper>
        </SwiperImages>
      </div>
      {/* form  */}
      <FormSection />
    </div>
  );
}

const ServicesSection = () => {
  return (
    <section
      className="grid grid-cols-2 gap-10 relative container-layout"
      id="the-services"
    >
      <SectionHeader
        title="Can we help you"
        header="Consultancy Industry"
        text="We have 31+ year servicing consulting advising solution what make great business."
        className="sticky top-10 h-fit flex-col gap-8"
      />
      <GridWrapper>
        {services.map(({ img, title }) => (
          <div className="space-y-8" key={title}>
            <img src={img} alt={title} />
            <h1 className="text-4xl">{title}</h1>
            <p>
              We have spent 31+ years servicing consulting & advising solutions
              and learned what makes great businesses stay in business.
            </p>
            <ArrowButton tag="a" />
          </div>
        ))}
      </GridWrapper>
    </section>
  );
};
const GridWrapper = tw.div`
grid
grid-cols-2
gap-x-12
gap-y-28
text-pretty
`;

const SwiperWrapper = tw.div`
flex
items-end
gap-20
[&>div]:bg-white 
[&>div]:rounded-none 
[&>:first-child]:w-1/2
[&>div]:translate-x-0
`;

const array = [
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
  "/play-icon.png",
];
