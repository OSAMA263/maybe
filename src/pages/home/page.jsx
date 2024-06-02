import tw from "tailwind-styled-components";
import OverlayHero from "./sections/OverlayHero";
import { OrangeButton } from "../../components/Buttons";
import { AutoSlider } from "../../components/Swipers";
import { ServicesSection } from "../service/page";
import SectionHeader from "../../components/SectionHeader";
import ServicePlan from "../service/sections/ServicePlan";
import { service_plan } from "../service/data";
import TheTeam from "../about/sections/TheTeam";
import { TwoSwipers } from "../about/page";
import Blogs from "../blogs/page";
import { autoslider_text, awards_data } from "./data";
import Accordions from "./sections/Accordion";

export default function Home() {
  return (
    <div className="space-y-40">
      <OverlayHero />
      {/* text animation scroll section */}
      <div className="bg-Sky space-y-20 py-20">
        <div className="container-layout grid grid-cols-2">
          {/* text animtion */}
          <div></div>
          <div className="w-1/2 ms-auto space-y-10">
            <h1>We Know what were doing</h1>
            <p>
              <small>
                We have spent 31+ years of servicing consulting & advising
                solutions and learned what makes great businesses stay in
                business.
              </small>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 container-layout">
          <div className="grid grid-cols-2">
            <OrangeButton to="/contact" tag="a" text="Join the community" />
            <OrangeButton to="/about" tag="a" text="Learn more about us" />
          </div>
        </div>
        <div className="flex items-start gap-20 justify-end">
          <img src="/home/img-left.png" alt="moving image on scorll" />
          <img src="/home/img-right.png" alt="hero img" />
        </div>
        <AutoSlider array={autoslider_text} text />
      </div>
      {/* all sevices */}
      <ServicesSection homePage />
      {/* service plans selection */}
      <div className="py-40 bg-Dark-blueish">
        <div className="space-y-16 container-layout">
          <SectionHeader
            title="Pricing Plan"
            header="Choose our service plan."
            text="We have 31+ years of servicing consulting advising solutions that make great business."
            className="text-white"
          />
          <div className="grid grid-cols-3 gap-20">
            {service_plan.slice(0, 2).map((service) => (
              <ServicePlan
                key={service.title}
                {...service}
                className="py-16 ps-10"
              />
            ))}
            <Accordions />
          </div>
        </div>
      </div>
      {/* charts */}
      <div className="flex items-center gap-24 justify-between container-layout">
        <SectionHeader
          header="Contributing to important global initiatives"
          title="Our Consultancy"
          className="!gap-10"
          text="We offer a wide range of services to help business organizations address various challenges, improve processes, make informed decisions, and achieve their goals."
        >
          <p>
            The specific services offered by a consultancy company can vary
            depending on their expertise and focus area.
          </p>
          <OrangeButton to="/service" tag="a" text="View Moew" />
        </SectionHeader>
        <div>
          <img src="/home/chart.png" alt="charts" />
        </div>
      </div>
      {/* team overlay */}
      <div className="flex gap-10">
        <div className="flex justify-between">
          <span>title</span>
          <span>title</span>
          <span>title</span>
        </div>
        <img src="/home/team-img1.png" alt="" />
      </div>
      {/* team members */}
      <TheTeam />
      {/* reviews and autoswiper */}
      <TwoSwipers />
      {/* awards */}
      <div className="grid grid-cols-2 container-layout">
        <SectionHeader
          title="Our Awards"
          header="Humanitarian award"
          text="We have 31+ years of servicing consulting advising solutions and great business."
          className="sticky top-10 h-fit "
        >
          <OrangeButton tag="a" to="/contact" text="Contact us" />
        </SectionHeader>
        <Awards />
      </div>
      {/* all blogs */}
      <div className="[&>div]:!pt-0">
        <Blogs />
      </div>
    </div>
  );
}
const Awards = () => {
  return (
    <div className="divide-y divide-Gray">
      {awards_data.map(({ title, img }, i) => (
        <div className="py-10 flex items-start gap-32" key={i}>
          <div className="flex gap-6 font-semibold">
            <small>/0{i + 1}</small>
            <img src={img} alt={title + i} />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">{title}</h1>
            <p>
              We offer a wide range of services to help businesses with
              organizational challenges.
            </p>
            <OrangeButton tag="a" to="/about" text="About Us" />
          </div>
        </div>
      ))}
    </div>
  );
};

// const TextAnimation = () => {
//   const text =
//     "We believe in power individual contribution the fire at the heart web we back the the fire at the heart web we back the founder of new form network digital founder of new form network digital analytics that harness the talent individual analytics that harness the talent individual for benefit of the collective togethers we're shap world where ownership collaboration innovation thrive beyond traditional boundaries.";

//   const arr = text.split(" ");

//   return (
//     <div className="relative text-4xl">
//       <div className="absolute top-0">
//         {arr.map((word, i) => (
//           <motion.span
//             className="!text-Gray inline-block relative"
//             key={"word" + i}
//           >
//             <motion.span
//               className="text-Dark inline-block w-5 absolute"
//               key={"word" + i}
//             >
//               <span>
//                 {word}
//                 {"\u00A0"}
//               </span>
//             </motion.span>
//             <span className="!text-gray-400">
//               {word}
//               {"\u00A0"}
//             </span>
//           </motion.span>
//         ))}
//       </div>{" "}
//       <p className="opacity-">{text}</p>
//     </div>
//   );
// };
// offset =1.5%
// total =65

// const  array= [
//   import tw from "tailwind-styled-components";
// import OverlayHero from "./sections/OverlayHero";
// import { OrangeButton } from "../../components/Buttons";
// import { AutoSlider } from "../../components/Swipers";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="space-y-40">
//       <OverlayHero />
//       {/* text animation scroll section */}
//       <div className="bg-Sky space-y-20 py-20">
//         <div className="container-layout grid grid-cols-2">
//           {/* text animtion */}
//           <div></div>
//           <div className="w-1/2 ms-auto space-y-10">
//             <h1>We Know what were doing</h1>
//             <p>
//               <small>
//                 We have spent 31+ years of servicing consulting & advising
//                 solutions and learned what makes great businesses stay in
//                 business.
//               </small>
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 container-layout">
//           <div className="grid grid-cols-2">
//             <OrangeButton to="/contact" tag="a" text="Join the community" />
//             <OrangeButton to="/about" tag="a" text="Learn more about us" />
//           </div>
//         </div>

//         <div className="space-y-10 container-layout">
//           <TextAnimation />
//         </div>
//         <div className="flex items-start gap-20 justify-end">
//           <img src="/home/img-left.png" alt="moving image on scorll" />
//           <img src="/home/img-right.png" alt="hero img" />
//         </div>
//         <AutoSlider array={array} text />
//       </div>
//     </div>
//   );
// }
// const array = [
//   "Consulting",
//   "Data Analysis",
//   "Marketing",
//   "Accounting",
//   "Contributor",
// ];
// const TextAnimation = () => {
//   const text = [
//     "We believe in power individual contribution",
//     "the fire at the heart web we back the",
//     "founder of new form network digital",
//     "analytics that harness the talent individual",
//     "for benefit of the collective togethers we're",
//     "shap world where ownership collaboration",
//     "innovation thrive beyond traditional",
//     "boundaries.",
//   ];

//   return (
//     <div className="relative font-semibold text-4xl">
//          <div className="relative">
//         {text.map((par, i) => (
//           <p className="relative" key={i}>
//             <p className="absolute top-0 text-Dark w-10" key={i}>
//               {par}
//             </p>
//             <p>{par}</p>
//           </p>
//         ))}
//       </div>
//       {/* <p className="opacity">{text}</p> */}
//     </div>
//   );
// };
// // offset =1.5%
// // total =65

// ]
