import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import {
  FaXTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import ThreeAvatars from "../components/ThreeAvatars";
import { IoIosSend } from "react-icons/io";
import { footer_links } from "./navigation-links";

export default function Footer() {
  return (
    <div className="bg-Dark-blueish pt-12">
      <FooterContainer>
        <div>
          <div>
            <img src="/brand-logo-white.png" alt="brand" />
          </div>
          <div className="col-span-2">
            <ThreeAvatars borderColor="[&_img]:bg-Dark-blueish" />
          </div>
          <h1 className="col-span-2">Have any question?</h1>
          <div>
            <button className="text-xl font-semibold">Live chat now</button>
          </div>
        </div>
        {/* the bootom row */}
        <div className="row-span-2">
          <div className="space-y-4">
            <h1>About us</h1>
            <p>
              We offer a wide range of services on help businesses organization.
            </p>
            <div className="flex flex-col">
              <Link to="mailto:osamaelseify2@gmail.com">
                something@gmail.com
              </Link>
              <Link to="tel:0215168465446465">+(20) 123 123 465</Link>
            </div>
          </div>
          <div className="col-span-2 flex gap-4">
            {footer_links.map((arr, i) => (
              <ul key={i}>
                {arr.map(({ name, link }) => (
                  <li key={name} className="text-Gray w-fit">
                    <Link
                      to={link}
                      className="flex gap-2 items-center [&>span]:hover:translate-x-full [&>span]:hover:opacity-0"
                    >
                      <span className="w-4 h-[2px] block bg-Gray transition-all duration-200"></span>
                      <h3>{name}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="col-span-2 space-y-4">
            <h1>News Letter</h1>
            <p>We offer a wide range of services to have organization</p>
            <div className="flex items-center !justify-start">
              <input
                type="email"
                placeholder="e-Mail here"
                className="border py-2 text-white px-1 bg-[#1f212c] border-transparent text-sm focus:border-[#4848ff] border-r-0"
              />
              <button
                className="text-3xl p-1 text-Dark bg-white"
                aria-label="send"
              >
                <IoIosSend />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h1>Social</h1>
            <div className="grid grid-cols-3 gap-2">
              {social_imgs.map(({ img, icon }) => (
                <SocialWrapper key={img}>
                  <img
                    alt={img}
                    className="w-full hover:brightness-50"
                    src={img}
                  />
                  <span>{icon}</span>
                </SocialWrapper>
              ))}
            </div>
          </div>
        </div>
      </FooterContainer>
      <FooterBottom>
        <span>i did this peice srash </span>
        <div className="flex gap-10 items-center [&>a]:flex [&>a]:items-center">
          {social_icons.map(({ icon, id }) => (
            <button key={id}>{icon}</button>
          ))}
        </div>
      </FooterBottom>
    </div>
  );
}

const FooterContainer = tw.footer`
container-layout
text-white
grid
grid-ols-6
grid-rows-3
gap-12
pb-10
justify-center
divide-y
[&>div]:grid
[&>div]:grid-cols-6
[&>div]:items-center
[&_div]:justify-center
[&_button]:underline
[&_button]:w-fit
[&_button:hover]:text-Orange
[&_a]:underline
[&_a]:w-fit
[&_a:hover]:text-Orange
[&_h1]:text-xl
`;

const FooterBottom = tw.div`
flex
justify-between
py-4
bg-[#1f212c]
`;

const SocialWrapper = tw.div`
relative
overflow-hidden
cursor-pointer
[&>span]:text-2xl
[&>span]:-translate-y-1/2
[&>span]:hover:top-1/2
[&>span]:absolute
[&>span]:left-1/2
[&>span]:-top-full
[&>span]:transition-all
[&>span]:duration-500
[&>span]:-translate-x-1/2
`;
const social_icons = [
  { id: 1, icon: <FaXTwitter /> },
  { id: 2, icon: <FaFacebookF /> },
  { id: 3, icon: <FaGithub /> },
  { id: 4, icon: <FaLinkedinIn /> },
];

const social_imgs = [
  { img: "/footer/social-img1.png", icon: <FaGithub /> },
  { img: "/footer/social-img2.png", icon: <FaFacebookF /> },
  { img: "/footer/social-img3.png", icon: <FaXTwitter /> },
  { img: "/footer/social-img4.png", icon: <FaFacebookF /> },
  { img: "/footer/social-img5.png", icon: <FaGithub /> },
  { img: "/footer/social-img6.png", icon: <FaLinkedinIn /> },
];
