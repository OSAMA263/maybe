import tw from "tailwind-styled-components";
import RevealElement from "../../../components/RevealElement";

export default function TwoImgsTeam() {
  return (
    <div className="container-layout flex justify-center [&_span]:text-2xl">
      <RevealElement className="overflow-visible pb-0">
        <div className="flex max-sm:flex-col">
          <div className="flex flex-col justify-around">
            <span className="ps-16">Startups</span>
            <span>Leadership</span>
            <span className="ps-16">Analytics</span>
          </div>
          <div className="relative">
            <img
              src="/home/team-img2.png"
              className="w-full translate-x-10 relative"
              alt="overlay1"
            />
            <OverlayBg className="bg-Orange translate-x-10" />
          </div>
        </div>
      </RevealElement>
      {/* //////////////////// */}
      <RevealElement className="overflow-visible pb-0">
        <div className="flex max-sm:flex-col">
          <div className="relative mix-blend-multiply">
            <img
              src="/home/team-img1.png"
              className="w-full -translate-x-10"
              alt="overlay2"
            />
            <OverlayBg className="bg-[#1874ff] -translate-x-10" />
          </div>
          <div className="flex flex-col justify-around">
            <span>Marketing</span>
            <span className="ps-16">Accounting</span>
            <span>Technology</span>
          </div>
        </div>
      </RevealElement>
    </div>
  );
}
const OverlayBg = tw.div`
absolute
w-full
h-full
top-0
bg-opacity-85
rounded-full
mix-blend-multiply
`;
