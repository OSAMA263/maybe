import tw from "tailwind-styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav_links } from "./navigation-links";
import { Slide, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import ScrollTopButton from "./ScrollTopButton";

export default function Header() {
  const { pathname } = useLocation();
  const { onToggle, isOpen,onClose } = useDisclosure();
  const [mobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <>
      <Container $isOpen={isOpen} $url={pathname}>
        <div className="flex w-full justify-between items-center">
          <h1>
            <Link to="/" aria-label="home page">
              <img src="brand-logo.svg" alt="brand" />
            </Link>
          </h1>
          <button
            aria-label="toggle nav menu"
            onClick={onToggle}
            className={`md:hidden ${isOpen ? "[&_img]:rotate-90" : "rotate-0"}`}
          >
            <img
              src={isOpen ? "/logo-orange.svg" : "/logo-dark.svg"}
              alt="logo dark"
            />
          </button>
        </div>
        <nav className="max-md:hidden">
          <NavLinks>
            {nav_links.map(({ name, link }) => (
              <li key={name}>
                <NavLink className="hover:text-Orange" to={link}>
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </NavLinks>
        </nav>
      </Container>
      <nav className="md:hidden">
        {mobile && (
          <Slide
            className="!h-[50vh] !absolute !z-[69]"
            direction="top"
            in={isOpen}
          >
            <NavLinks>
              {nav_links.map(({ name, link }) => (
                <li key={name}>
                  <NavLink className="hover:text-Orange" to={link}>
                    <span>{name}</span>
                  </NavLink>
                </li>
              ))}
            </NavLinks>
          </Slide>
        )}
      </nav>
      <ScrollTopButton/>
    </>
  );
}

const Container = tw.header`
${({ $url, $isOpen }) =>
  $isOpen ? "" : $url === "/" ? "" : "shadow-[0px_0px_20px_20px_#f5f5f5]"}
absolute
top-0
left-0
bg-white
px-8
py-6
lg:px-20
md:flex
justify-between
items-center
md:w-[80%]
w-full
max-md:space-y-10
z-[6969]
`;

const NavLinks = tw.ul`
[&_a.active]:opacity-55
flex
items-center
lg:gap-x-20
gap-x-6
xl:text-lg
max-md:bg-Dark-blueish
max-md:text-white
max-md:p-6
max-md:h-full
max-md:flex-col
max-md:justify-center
`;
