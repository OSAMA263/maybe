import tw from "tailwind-styled-components";
import { team } from "../data";

export default function TheTeam() {
  return (
    <section className="space-y-20 container-layout" id="the-team">
      <div className="flex justify-between">
        <div className="flex gap-20 items-start space-x-6">
          <span className="ps-4 border-l-4 border-Orange">Testimonial</span>
          <div className="space-y-4">
            <h1 className="text-7xl align-baseline">Meet our amazing team</h1>
            <p className="text-xl">
              We have 31+ years of servicing consulting advising solutions that
              make great business.
            </p>
          </div>
        </div>
        logo
      </div>
      {/* the team cards */}
      <div className="flex justify-between gap-8">
        {team.map((member) => (
          <Card key={member.name} {...member} />
        ))}
      </div>
      {/* available position */}
      <div className="grid grid-cols-2">
        <ThreeAvatars />
        <div className="space-y-10">
          <p>
            We have spent 30+ years on servicing and have everything in one
            place requesting status updates & interviews. creating a consultancy
            website is a crucial step in establishing
          </p>
          <button>main button styles</button>
        </div>
      </div>
    </section>
  );
}

const Card = ({ name, designation, img }) => {
  return (
    <div className="space-y-6 bg-Sky">
      <CardContainer>
        <img src={img} alt={name} />
        {/* Slideing name & shit on hover*/}
        <div className="absolute bottom-10 w-full">
          <div className="relative overflow- text-xl text-white">
            <h2>
              <span className="bg-Dark">{name}</span>
            </h2>
            <h1>
              <span className="bg-Orange">{designation}</span>
            </h1>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

const ThreeAvatars = ({ borderColor = "white" }) => {
  return (
    <div
      className={`flex items-center ${
        borderColor === "white" ? "border-white" : "border-[#2a2c38]"
      }`}
    >
      <div className="relative">
        <img
          src="/avatar1.png"
          className="rounded-full border-white border-[6px]"
          alt="ceo1"
        />
      </div>
      <div className="relative">
        <img
          src="/avatar2.png"
          className="rounded-full border-white border-[6px] z-[2] -translate-x-4"
          alt="ceo12"
        />
      </div>
      <div className="relative">
        <img
          src="/avatar3.png"
          className="rounded-full border-white border-[6px] z-[3] -translate-x-8"
          alt="ceo13"
        />
      </div>
      <span className="text-2xl">Join our team</span>
    </div>
  );
};

const CardContainer = tw.div`
relative
overflow-hidden
[&_h1]:hover:!translate-x-[10%]
[&_h2]:hover:!translate-x-0
[&_span]:inline-block 
[&_span]:py-4
[&_span]:px-10
[&_h1]:transition-all
[&_h2]:transition-all
[&_h1]:duration-1000
[&_h2]:duration-1000
[&_h1]:translate-x-[101%]
[&_h2]:-translate-x-full
`;
