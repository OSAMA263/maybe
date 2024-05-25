import tw from "tailwind-styled-components";
import { services } from "./data";
import SwiperCEO from "./sections/Swiper";
import TheTeam from "./sections/TheTeam";

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

const History = () => {
  return (
    <section className="space-y-20 container-layout" id="history">
      <div className="grid grid-cols-2 text-2xl">
        <div className="flex justify-between">
          <h6>
            <small>___</small> 2023
          </h6>
          <h6>something History</h6>
          <div></div>
        </div>
        <div className="space-y-6">
          <h1>
            Our something is always getting bigger, but we all work toward one goal
            to make sales success not be only possible.
          </h1>

          <p className="!text-base">
            We have spent 30+ years on servicing and have everything in one
            place requesting status updates & interviews. Creating a consultancy
            website is a crucial step in establishing an online presence for
            your consultancy business. heres a step-by-step guide to help build
            an effective consultancy website before launching thoroughly test
            your website for usability & compatibility.
          </p>

          <p className="!text-base">
            Once your consultancy website is live continue to refine it based on
            user feedback changing business needs establishing credibility in
            your industry.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center">
          <img src="/avatar1.png" className="rounded-full" alt="ceo avatar" />
          <div>
            <h4 className="text-2xl">Anidre Blue</h4>
            <span className="text-Gray">CEO @somthing</span>
          </div>
        </div>
        <div className="text-4xl font-semibold">
          “Our goal is to build software that gives customer-facing teams at
          something the ability.
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="flex justify-between">
          {numbersData.map((data) => (
            <HistoryCounter {...data} key={data.number} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HistoryCounter = ({ number, text }) => {
  return (
    <div className="space-y-3 relative text-balance">
      <span className="text-8xl font-semibold relative">
        <small className="text-3xl rounded-full bg-white px-1 absolute right-0 text-Orange">
          +
        </small>
        {number}
      </span>
      <p>{text}</p>
    </div>
  );
};
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
const numbersData = [
  { number: 420, text: "Business advice given over 30 years" },
  { number: 369, text: "Businesses guided over thirty years" },
  { number: 19, text: "Business Excellence awards achieved" },
];
