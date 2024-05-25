import tw from "tailwind-styled-components";
import { navLinks } from "./nav-links";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative">
      <Container>
        <div className="flex w-full justify-between items-center">
          <h1>
            <Link to="/">logo</Link>
          </h1>
          <button className="md:hidden">toggle</button>
        </div>
        <nav>
          <NavLinks>
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
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
p-6
bg-black
text-white
`;

const NavLinks = tw.ul`
md:flex
items-center
gap-x-16
`;
