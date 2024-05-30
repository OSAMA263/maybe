import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";

export default function ServicePlan(props) {
  const { title, price, period, features,className="" } = props;
  return (
    <Card className={className}>
      {/* spining img */}
      <img
        src="/logo-dark.svg"
        alt="spining logo"
        className="top-0 opacity-50 right-0 w-[30%] absolute"
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
        {features.map((feature) => (
          <div className="flex items-center gap-2" key={feature}>
            <div className="w-4 h-[2px] bg-Gray rounded-xl"></div>
            <span className="text-Gray font-normal">{feature}</span>
          </div>
        ))}
      </div>
      {/* card footer*/}
      <OrangeButton />
    </Card>
  );
}
const Card = tw.div`
px-10
relative
py-20
h-fit
bg-Sky
space-y-12
[&>img]:hover:animate-spin-slow
`;
