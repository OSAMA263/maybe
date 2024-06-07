import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";
import RevealElement from "../../../components/RevealElement";

export default function FormSection() {
  return (
    <section id="form" className="py-20 bg-Sky">
      <div className="container-layout space-y-20">
        <h1 className="xl:text-8xl text-6xl text-center">Get Support?</h1>
        <div className="grid lg:grid-cols-2 items-center">
          {/* three images */}
          <div className="max-lg:hidden flex h-fit">
            {threeImgs.map(({ img, position }) => (
              <div
                className={`rounded-full relative overflow-hidden ${position}`}
                key={img}
              >
                <RevealElement noOpacity offset={.5} scale>
                  <img src={img} alt={img} />
                </RevealElement>
              </div>
            ))}
          </div>
          {/* form container */}
          <div className="space-y-20">
            <ContactInfo>
              <RevealElement y>
                <Link
                  to="tel:+(20)111-666-666-69"
                  className="lg:text-5xl text-2xl text-Dark-blueish"
                >
                  +(20)111-666-666-69
                </Link>
                <div>Mon - Sat: 9 am - 5 pm, Sun: Closed</div>
                <Link to="mailto:osamaelseify2@gmail.com">
                  supbud@something.com
                </Link>
                <div>somewhere in the earth</div>
              </RevealElement>
            </ContactInfo>
            {/* form inputs */}
            <form action="" className="space-y-12 text-lg">
              <RevealElement y>
                <div className="grid grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="First Name"
                    id="fname"
                    name="fname"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lname"
                    name="lname"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                  />
                </div>
                <textarea
                  className="w-full"
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
                <OrangeButton type="submit" text="Send Message" />
              </RevealElement>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactInfo = tw.div`
flex
flex-col
gap-2
font-bold
text-lg
text-Gray
[&>a]:w-fit
[&>a]:underline
[&>a:hover]:text-Orange
`;

const threeImgs = [
  { img: "/service/support-image2.png", position: "z-[1]" },
  {
    img: "/service/support-image1.png",
    position: "-translate-y-1/2 -translate-x-1/2 z-[2]",
  },
  { img: "/service/support-image3.png", position: "-translate-x-full z-[3]" },
];
