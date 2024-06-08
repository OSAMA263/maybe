import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // scroll to top button
  useEffect(() => {
    const scrollhandler = () => {
      window.scrollY > 800 ? setShow(true) : setShow(false);
    };
    window.addEventListener("scroll", scrollhandler);
    return () => {
      window.removeEventListener("scroll", scrollhandler);
    };
  }, []);

  return (
    <Button
      className={show ? "opacity-100 visible" : "opacity-0 invisible"}
      onClick={handleClick}
      aria-label="scroll top"
    >
      <PiArrowFatLinesUpFill />
    </Button>
  );
}

const Button = tw.button`
fixed
bottom-6
right-6
sm:p-4
p-2
rounded-full
bg-Orange
text-white
hover:bg-Dark-blueish
sm:text-3xl
z-[66666666666666669]
`;
