import tw from "tailwind-styled-components";
import { navLinks } from "./nav-links";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative">
      <Container>
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
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <Link className="hover:text-Orange" to={link}>
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </NavLinks>
        </nav>
      </Container>
    </div>
  );
}

const Container = tw.header`
absolute
md:flex
justify-between
items-center
w-[80%]
py-6
px-20
shadow-[0px_0px_20px_20px_#f5f5f5]
`;

const NavLinks = tw.ul`
md:flex
items-center
gap-x-20
`;
