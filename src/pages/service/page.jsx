import { ArrowButton } from "../../components/Buttons";
import SectionHeader from "../../components/SectionHeader";
import ThreeAvatars from "../../components/ThreeAvatars";
import { numbers, service_plan, services, swiper_data } from "./data";
import FormSection from "./sections/FormSection";
import ServicePlan from "./sections/ServicePlan";
import CountUpNumber from "../../components/CountUpNumber";
import tw from "tailwind-styled-components";
import { AutoSlider, SwiperImages } from "../../components/Swipers";
import { Link } from "react-router-dom";
import Layout from "../../shared/Layout";
import RevealElement from "../../components/RevealElement";

export default function Service() {
  return (
    <Layout
      description="services Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat. Eos est harum ullam explicabo, illo consequatur repellat vero illum!"
      title="Meditate - services"
    >
      <div className="container-layout">
        <div className="flex max-lg:flex-col gap-10 justify-between">
          <SectionHeader
            title="Services"
            header="What we offer"
            className="max-lg:flex-col"
            text="Unsere Services Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam suscipit nulla fuga porro, libero voluptas illum nobis impedit officia doloribus! Ipsa quis aspernatur consequatur beatae at explicabo eveniet, architecto culpa."
          />
          <div className="lg:text-xl min-w-[20%]">
            <RevealElement y>
              <p>Happy clients have been boost their health</p>
              <p>4.9 star (2.2k reviews)</p>
              <ThreeAvatars />
            </RevealElement>
          </div>
        </div>
      </div>
      <div className="relative">
        <RevealElement offset={0.2} scaleY noOpacity childClass="bg-white">
          <div></div>
        </RevealElement>
        <RevealElement className="w-[80%] ms-auto" offset={0.2} scale noOpacity>
          <img src="service/hero-image.png" alt="hero" className="w-full" />
        </RevealElement>
      </div>
      {/* her image */}
      {/* marquee */}
      <RevealElement y rotate={10}>
        <AutoSlider array={Array(5).fill("play-icon.png")} service />
      </RevealElement>
      {/* servicese */}
      <ServicesSection />
      {/* couting numbers */}
      <div className="bg-Dark-blueish py-40">
        <div className="container-layout flex flex-wrap justify-center gap-20">
          {numbers.map((num) => (
            <CountUpNumber
              key={num.text}
              {...num}
              className="text-Orange [&>small]:bg-Dark-blueish [&>span]:text-white"
            />
          ))}
        </div>
      </div>
      {/* services plans */}
      <section
        id="services-plans"
        className="container-layout grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 gap-8"
      >
        {service_plan.map((service) => (
          <ServicePlan key={service.title} {...service} />
        ))}
      </section>
      {/* swiper images reviews? */}
      <div className="container-layout">
        <SwiperImages quoteImg={"quote2.png"} array={swiper_data}>
          <SwiperWrapper></SwiperWrapper>
        </SwiperImages>
      </div>
      {/* form  */}
      <FormSection />
    </Layout>
  );
}

export const ServicesSection = ({ homePage }) => {
  return (
    <section
      className={`grid lg:grid-cols-2 gap-10 relative container-layout ${
        homePage && "!grid-cols-1 sm:!gap-40 gap-10"
      }`}
      id="the-services"
    >
      <SectionHeader
        title="Can we help you"
        header="Consultancy Industry"
        text="We have 31+ year servicing consulting advising solution what make great business."
        className={
          homePage
            ? "!w-full max-sm:flex-col"
            : "lg:sticky top-10 h-fit flex-col gap-8"
        }
      />
      <GridWrapper className={homePage && "md:!grid-cols-3 "}>
        {services.map(({ title, img }) => (
          <div className="space-y-4 p-6" key={title}>
            <RevealElement y>
              <img src={img} alt={title} />
              <h1 className="xl:text-4xl text-2xl">
                <Link
                  className="hover:text-Orange"
                  to="/service/single-service"
                >
                  {title}
                </Link>
              </h1>
              <p>
                We have spent 31+ years servicing consulting & advising
                solutions and learned what makes great businesses stay in
                business.
              </p>
              <ArrowButton tag="a" to="/service/single-service" />
            </RevealElement>
          </div>
        ))}
      </GridWrapper>
    </section>
  );
};

const GridWrapper = tw.div`
grid
sm:grid-cols-2
xl:gap-x-12
sm:gap-x-4
sm:gap-y-28
gap-y-5
text-pretty
`;

const SwiperWrapper = tw.div`
flex
items-end
sm:gap-20
gap-10
[&>div]:bg-white 
[&>div]:rounded-none 
[&>:first-child]:w-1/2
[&>div]:translate-x-0
`;
