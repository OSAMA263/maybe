/* eslint-disable react/no-unescaped-entities */
import tw from "tailwind-styled-components";
import { service_plan } from "../data";
import ServicePlan from "../sections/ServicePlan";

export default function SingleService() {
  return (
    <Container>
      <section className="space-y-20">
        <div className="container-layout">
          <h1 className="!text-6xl w-[80%] text-pretty">
            Organisation Our business consultancy services encompass
          </h1>
        </div>
        <img
          src="/service/single-page/single-service1.png"
          className="ms-auto"
          alt="hero shi"
        />
      </section>
      {/*  */}
      <div className="container-layout">
        <div className="flex gap-20">
          <p>
            At Sassy Service, we pride ourselves on providing exceptional and
            unforgettable experiences. Our team of dedicated professionals is
            here to unleash the sass and cater to your every need.
          </p>
          <p>
            Whether you're in need of a wardrobe makeover or searching for the
            perfect gift, we'll curate a personalized shopping experience that
            aligns with your unique style and preferences.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="space-y-10">
            <div className="space-y-5">
              <h1>Sassy Personal Shopping</h1>
              <p>
                Sassy Personal Shopping provides personalized styling services
                to help clients define and enhance their personal style. Whether
                you're looking need assistance for a special event, and
                lifestyle to create a look that suits you best. <br /> From red
                carpet events to casual chic, we'll make sure you exude
                confidence and style wherever you go.
              </p>
            </div>
            <div className="space-y-5">
              <h1>Glamorous Styling Sessions</h1>
              <p>
                Leave your shopping worries behind and let our expert personal
                shoppers take the lead. Whether you're in need of a wardrobe
                makeover or searching for the perfect.
              </p>
              <ul>
                <li>Product Design Thinking</li>
                <li>Technology Challengers</li>
                <li>Software Development and QA.</li>
              </ul>
            </div>
          </div>
          {/* side img */}
          <img
            src="/service/single-page/single-service2.png"
            alt="side image"
          />
        </div>
      </div>
      {/*  */}
      <div className="container-layout">
        <h1>VIP Event Planning</h1>
        <p>
          VIP Event Planning offers a personalized approach to event design and
          execution. Their team of experienced event planners works closely with
          clients to understand their vision, objectives, and
          preferences.Whether it's a glamorous gala, a product launch, a
          corporate retreat, or a private celebration, they strive to create a
          unique and tailored experience that exceeds expectations.
        </p>
        <h1>Luxurious Spa Retreats</h1>
        <p>
          Luxurious Spa Retreats selects exceptional destinations known for
          their natural beauty, serenity, and luxury. These locations often
          include stunning resorts, private islands, mountainside retreats, or
          secluded beachfront properties.
        </p>
        <ul>
          <li>Diversity investigation for royal been.</li>
          <li>
            Create a structure where participants will add their information.
          </li>
          <li>Efforts without a focus.</li>
          <li>Many contradicting opinions a vision document.</li>
        </ul>
      </div>
      <section
        id="services-plans"
        className="container-layout grid grid-cols-3 gap-x-36"
      >
        {service_plan.map((service) => (
          <ServicePlan
            className="!bg-[#2d2d3b] text-white [&_button]:!text-white"
            key={service.title}
            {...service}
          />
        ))}
      </section>
    </Container>
  );
}

const Container = tw.div`
space-y-20
pt-44
text-pretty
[&>div]:container-layout
[&>div]:space-y-20
[&_ul]:list-disc
[&_ul]:ms-6
[&_ul]:font-bold
[&_p]:text-lg
[&_h1]:text-4xl
`;
