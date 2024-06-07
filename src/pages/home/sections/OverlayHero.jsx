import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";
import RevealElement from "../../../components/RevealElement";

export default function OverlayHero({ sm_device }) {
  return (
    <div className="h-dvh bg-[url('/home/hero.png')] relative">
      <div className="absolute z-[1] w-full h-full bg-[#0c2754] bg-opacity-55">
        <OverlayGridBorders $sm_device={sm_device}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className={
                sm_device
                  ? ""
                  : i === 0
                  ? "border-l"
                  : i === 3
                  ? "!border-r"
                  : ""
              }
              key={i}
            ></div>
          ))}
        </OverlayGridBorders>
      </div>
      {/* overlya hero content */}
      <div className="h-full z-[2] container-layout relative flex items-center w-full">
        <div className="space-y-40 text-white w-full">
          <RevealElement y>
            <h1 className="2xl:text-9xl lg:text-8xl md:text-6xl text-4xl sm:w-[70%]">
              Clear direction for your business
            </h1>
            <div className="grid sm:grid-cols-4 grid-cols-2">
              <OrangeButton tag="a" to="/about" text="Our Approach" />
              <OrangeButton tag="a" to="/service" text="Get Service" />
            </div>
          </RevealElement>
        </div>
        {/* absolute div with numbers */}
        <NumbersWrapper>
          {numbers.map(({ num, title }) => (
            <div
              className="flex justify-between gap-20 w-full items-center"
              key={title}
            >
              <RevealElement y>
                <span>{num}</span>
              </RevealElement>
              <h1>{title}</h1>
            </div>
          ))}
        </NumbersWrapper>
      </div>
    </div>
  );
}
const OverlayGridBorders = tw.div`
${({ $sm_device }) => ($sm_device ? "" : "divide-x")}
container-layout
h-full
grid
grid-cols-4
[&>div]:border-Gray
`;

const NumbersWrapper = tw.div`
bg-white
absolute
p-[3vw]
right-0
lg:top-1/2
top-[69%]
space-y-10
[&_span]:lg:text-7xl
[&_span]:text-4xl
[&_h1]:text-Gray
`;

const numbers = [
  { num: "120+", title: "Trade In The World" },
  { num: "30k", title: "Complete Projects" },
  { num: "9k", title: "Satisfied Clients" },
  { num: "97%", title: "Success Rate" },
];
