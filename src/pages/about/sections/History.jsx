import CountUpNumber from "../../../components/CountUpNumber";
import RevealElement from "../../../components/RevealElement";

export default function History() {
  return (
    <section className="space-y-20 container-layout" id="history">
      <div className="grid lg:grid-cols-2 space-y-10 md:text-2xl text-lg">
        <RevealElement y>
          <div className="flex gap-20">
            <h6>
              <small>___</small> 2023
            </h6>
            <h6>something History</h6>
            <div></div>
          </div>
        </RevealElement>
        <div className="space-y-10">
          <RevealElement y>
            <h1 className="lg:text-3xl">
              Our something is always getting bigger, but we all work toward one
              goal to make sales success not be only possible.
            </h1>
            <p className="text-lg">
              We have spent 30+ years on servicing and have everything in one
              place requesting status updates & interviews. Creating a
              consultancy website is a crucial step in establishing an online
              presence for your consultancy business. heres a step-by-step guide
              to help build an effective consultancy website before launching
              thoroughly test your website for usability & compatibility.
            </p>
            <p className="text-lg">
              Once your consultancy website is live continue to refine it based
              on user feedback changing business needs establishing credibility
              in your industry.
            </p>
          </RevealElement>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 space-y-10">
        <RevealElement y>
          <div className="flex gap-2 items-center">
            <img src="avatar1.png" className="rounded-full" alt="ceo avatar" />
            <div>
              <h4 className="text-2xl">Anidre Blue</h4>
              <span className="text-Gray">CEO @somthing</span>
            </div>
          </div>
          <div className="sm:text-4xl text-2xl font-semibold">
            “Our goal is to build software that gives customer-facing teams at
            something the ability.
          </div>
        </RevealElement>
      </div>
      <div className="grid xl:grid-cols-2">
        <div></div>
        <div className="flex flex-wrap justify-center gap-10">
          {numbersData.map((data) => (
            <CountUpNumber {...data} key={data.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

const numbersData = [
  { number: 420, text: "Business advice given over 30 years" },
  { number: 369, text: "Businesses guided over thirty years" },
  { number: 19, text: "Business Excellence awards achieved" },
];
