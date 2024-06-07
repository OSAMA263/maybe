import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";
import RevealElement from "../../../components/RevealElement";

export default function ServicePlan(props) {
  const { title, price, period, features, className = "" } = props;
  return (
    <RevealElement x offset={0.5}>
      <Card className={className}>
        {/* spining img */}
        <img
          src="/logo-dark.svg"
          alt="spining logo"
          className="top-0 opacity-50 right-0 w-[25%] absolute"
        />
        {/* card header */}
        <div className="space-y-1">
          <h1 className="text-2xl">{title}</h1>
          <span className="text-5xl">
            {price}
            <small className="text-base">$</small>
          </span>
          <small className="block text-Gray">/ {period}</small>
        </div>
        {/* card body */}
        <div className="space-y-2">
          {features.map((feature, i) => (
            <div className="flex items-center gap-2" key={feature + i}>
              <div className="w-4 h-[2px] bg-Gray rounded-xl"></div>
              <span className="text-Gray font-normal">{feature}</span>
            </div>
          ))}
        </div>
        {/* card footer*/}
        <OrangeButton />
      </Card>
    </RevealElement>
  );
}
const Card = tw.div`
px-10
relative
lg:py-20
py-10
h-fit
bg-Sky
space-y-12
[&>img]:hover:animate-spin-slow
`;
