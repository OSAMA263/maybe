import { ArrowButton } from "../../components/Buttons";
import SectionHeader from "../../components/SectionHeader";
import ThreeAvatars from "../../components/ThreeAvatars";
import { numbers, servicePlan, services } from "./data";
import FormSection from "./sections/FormSection";
import ServicePlan from "./sections/ServicePlan";

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
      {/* servicese */}
      <ServicesSection />
      {/* couting numbers */}
      <div className="bg-Dark-blueish py-32">
        <div className="container-layout flex justify-between gap-x-36">
          {numbers.map(({ num, title }) => (
            <div className="space-y-4 text-center" key={title}>
              <span className="text-white border-b pb-3 border-Orange">
                {num}
              </span>
              <p className="text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* services plans */}
      <section id="services-plans" className="container-layout grid grid-cols-3 gap-x-36">
        {servicePlan.map((service) => (
          <ServicePlan key={service.title} {...service} />
        ))}
      </section>
      {/* form  */}
      <FormSection/>
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
      <div className="grid grid-cols-2 gap-x-12 gap-y-28 text-pretty">
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
      </div>
    </section>
  );
};
