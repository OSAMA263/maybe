import { OrangeButton } from "../../components/Buttons";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import {
  FaXTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import Layout from "../../shared/Layout";
import RevealElement from "../../components/RevealElement";

export default function Contact() {
  return (
    <Container
      description="contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat. Eos est harum ullam explicabo, illo consequatur repellat vero illum!"
      title="Meditate - contact us"
    >
      {/* form */}
      <Form />
      {/* contact info */}
      <div className="md:space-y-20 space-y-10">
        <RevealElement y className="!pb-0">
          <h1 className="xl:text-7xl text-5xl flex flex-col">
            <span>Let’s Work</span>
            <span className="flex items-center gap-4">
              <small className="h-1 w-[20%] bg-Dark"></small>
              <span>together !</span>
            </span>
          </h1>
          <p className="text-balance text-lg">
            Please reach out to our sales team for comprehensive details
            regarding our product offerings, and rest assured, we will promptly
            respond to your inquiry. Whether to discuss just a general enquiry,
            we’d love to from you.
          </p>
          <ContactLinks>
            <Link to="tel:+(20)111-666-666-69">(20) 111 666 666 69</Link>
            <Link to="mailto:osamaelseify2@gmail.com">
              supbud@something.com
            </Link>
            <div>somewhere in the earth</div>
          </ContactLinks>
          <div className="flex gap-4 text-2xl">
            {social_icons.map(({ icon, id }) => (
              <Link
                aria-label="social icon"
                className="hover:text-Orange"
                to=""
                key={id}
              >
                {icon}
              </Link>
            ))}
          </div>
        </RevealElement>
      </div>
    </Container>
  );
}

const Form = () => {
  return (
    <div className="space-y-20">
      <div className="relative w-fit">
        <img
          src="contact/spining-text.png"
          alt="spining text"
          className="animate-spin-slow"
        />
        <img
          src="contact/arrow.png"
          alt="arrow"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* form inputs */}
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <RevealElement
          y
          childClass="[&>div]:flex [&>div]:gap-4 [&>div]:flex-col"
        >
          <div>
            <label htmlFor="name">Enter your name*</label>
            <input type="text" name="name" required id="name" />
          </div>
          <div>
            <label htmlFor="email">Enter your email*</label>
            <input type="email" name="email" required id="email" />
          </div>
          <div>
            <label htmlFor="message">Enter your message*</label>
            <textarea id="message" name="message" required rows={3}></textarea>
          </div>
          <OrangeButton
            text="Submit Now"
            type="submit"
            className="xl:text-xl xl:!px-20 xl:!py-6"
          />
        </RevealElement>
      </FormContainer>
    </div>
  );
};

const Container = tw(Layout)`
container-layout
flex
items-center
lg:gap-28
gap-16
[&>div]:flex-1
[&>div]:w-full
max-md:flex-col-reverse
`;

const FormContainer = tw.form`
space-y-8
font-semibold
text-lg
text-Dark
`;
const ContactLinks = tw.div`
flex 
font-semibold
text-lg
flex-col
gap-2
[&>a:hover]:text-Orange
[&>a]:underline
text-Dark
`;
const social_icons = [
  { id: 1, icon: <FaXTwitter /> },
  { id: 2, icon: <FaFacebookF /> },
  { id: 3, icon: <FaGithub /> },
  { id: 4, icon: <FaLinkedinIn /> },
];
