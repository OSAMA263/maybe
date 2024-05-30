import CountUpNumber from "../../../components/CountUpNumber";

export default function History() {
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
            Our something is always getting bigger, but we all work toward one
            goal to make sales success not be only possible.
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