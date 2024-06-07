import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import tw from "tailwind-styled-components";

export default function Accordions() {
  return (
    <Accordion defaultIndex={[0]} className="divide-Gray border-Gray font-bold text-white max-xl:col-span-2" allowToggle>
      {questions.map((que) => (
        <AccordionItem key={que}>
          {({ isExpanded }) => (
            <AccordionButton className="flex flex-col !items-start text-start !py-6">
              <div className="flex items-center gap-4">
                <AccordionIcon isExpanded={isExpanded} />
                <h1 className="text-xl">{que}</h1>
              </div>
              <AccordionPanel className="text-gray-400 !py-6  ">
                We offer a wide range of services to help businesses
                organization address various challenges, improve processes, make
                informed is decision achieve their goal.
              </AccordionPanel>
            </AccordionButton>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const AccordionIcon = ({ isExpanded }) => {
  return (
    <span className="relative">
      <PlusIcon></PlusIcon>
      <PlusIcon className={!isExpanded ?"rotate-90":""}></PlusIcon>
    </span>
  );
};

const PlusIcon = tw.small`
absolute
lef-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
bg-white
transition-all
duration-500
w-3
h-1
`;

const questions = [
  "What is this thing?",
  "What services does company offer?",
  "Do you offer customization for your services?",
  "What payment methods do you accept?",
  "How does the 14-day trial work?",
  "How can I get in touch with bizmax?",
];
