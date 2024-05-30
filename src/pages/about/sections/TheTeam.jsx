import tw from "tailwind-styled-components";
import { team } from "../data";
import SectionHeader from "../../../components/SectionHeader";
import ThreeAvatars from "../../../components/ThreeAvatars";
import { ArrowButton } from "../../../components/Buttons";

export default function TheTeam() {
  return (
    <section className="space-y-20 container-layout" id="the-team">
      <SectionHeader
        title="Testimonial"
        header="Meet our amazing team"
        text="We have 31+ years of servicing consulting advising solutions that
        make great business."
      />
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
          <ArrowButton />
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
