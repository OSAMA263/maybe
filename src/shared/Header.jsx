import tw from "tailwind-styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav_links } from "./navigation-links";

export default function Header() {
  const {pathname}=useLocation()
  return (
    <div className="relative z-[6969]">
      <Container $url={pathname}>
        <div className="flex w-full justify-between items-center">
          <h1>
            <Link to="/">
              <img src="/brand-logo.svg" alt="brand" />
            </Link>
          </h1>
          <button className="md:hidden">toggle</button>
        </div>
        <nav>
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
    </div>
  );
}

const Container = tw.header`
${({$url})=>$url==="/"?"":"shadow-[0px_0px_20px_20px_#f5f5f5]"}
absolute
md:flex
justify-between
items-center
w-[80%]
py-6
px-20
bg-white
`;

const NavLinks = tw.ul`
md:flex
items-center
gap-x-20
`;
