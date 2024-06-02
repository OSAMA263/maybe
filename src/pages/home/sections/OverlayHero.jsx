import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";

export default function OverlayHero() {
  return (
    <div className="h-dvh bg-[url('/home/hero.png')] relative ">
      <div className="absolute z-[1] w-full h-full bg-[#0c2754] bg-opacity-55">
        <div className="container-layout h-full grid grid-cols-4 divide-x [&>div]:border-Gray">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className={i === 0 ? "border-l" : i === 3 ? "!border-r" : ""}
              key={i}
            ></div>
          ))}
        </div>
      </div>
      {/* overlya hero content */}
      <div className="h-full z-[2] container-layout relative flex items-center">
        <div className="space-y-40 w-full text-white">
          <h1 className="text-9xl w-[80%]">Clear direction for your business</h1>
          <div className="grid grid-cols-4">
            <OrangeButton tag="a" to="/about" text="Our Approach"/>
            <OrangeButton tag="a" to="/service" text="Get Service"/>
          </div>
        </div>
        <NumbersWrapper>
          {numbers.map(({ num, title }) => (
            <div
              className="flex justify-between gap-20 w-full items-center"
              key={title}
            >
              <span>{num}</span>
              <h1>{title}</h1>
            </div>
          ))}
        </NumbersWrapper>
      </div>
    </div>
  );
}
const NumbersWrapper = tw.div`
bg-white
absolute
p-20
-right-20
top-1/2
space-y-10
[&_span]:text-7xl
[&_h1]:text-Gray
`;

const numbers = [
  { num: "120+", title: "Trade In The World" },
  { num: "30k", title: "Complete Projects" },
  { num: "9k", title: "Satisfied Clients" },
  { num: "97%", title: "Success Rate" },
];
