import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { OrangeButton } from "../../../components/Buttons";

export default function FormSection() {
  return (
    <section id="form" className="py-32 bg-Sky">
      <div className="container-layout space-y-20">
        <h1 className="text-9xl text-center">Get Support?</h1>
        <div className="grid grid-cols-2 items-center">
          {/* three images */}
          <div className="flex h-fit">
            {threeImgs.map(({ img, position }) => (
              <div
                className={`rounded-full relative overflow-hidden ${position}`}
                key={img}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </div>
          {/* form container */}
          <div className="space-y-20">
            <ContactInfo>
              <Link
                to="tel:+(01)750-660-606"
                className="text-5xl text-Dark-blueish"
              >
                +(2)011-696-969-6
              </Link>
              <div>Mon - Sat: 9 am - 5 pm, Sun: Closed</div>
              <Link to="mailto:osamaelseify2@gmail.com">supbud@something.com</Link>
              <div>144 suite avenue, syd, australia</div>
            </ContactInfo>
            {/* form inputs */}
            <form action="" className="space-y-12 text-xl">
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
                rows={6}
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>
              <OrangeButton type="submit" text="Send Message" />
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
text-xl
text-Gray
[&>a]:transition-all
[&>a]:duration-500
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
