import { useParams } from "react-router";
import { blogs } from "../data";
import { BlogCard, CategoryAndDate } from "../page";
import SectionHeader from "../../../components/SectionHeader";
import { OrangeButton } from "../../../components/Buttons";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Layout from "../../../shared/Layout";
import RevealElement from "../../../components/RevealElement";

export default function SingleBlog() {
  const { id } = useParams();
  const { img, title, category, date } = blogs[id - 1];

  const socials = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaLinkedinIn /> },
    { id: 3, icon: <FaXTwitter /> },
  ];
  return (
    <Layout
      description={`blog ${id} Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat. Eos est harum ullam explicabo, illo consequatur repellat vero illum!`}
      title={`Meditate - blog${id}`}
      className="container-layout"
    >
      <div className="md:space-y-14 space-y-4 flex text-center flex-col items-center">
        <RevealElement y>
          <h1 className="md:text-6xl text-4xl text-balance">{title}</h1>
          <CategoryAndDate {...{ category, date }} />
        </RevealElement>
        <RevealElement
          scale
          offset={0.2}
          className="h-full container-layout"
          childClass="h-full"
        >
          <img src={img} className="aspect-[8/4] w-full" alt={`blog ${id}`} />
        </RevealElement>
      </div>
      {/* blog content details */}
      <BlogContentShit id={id} />
      <div className="flex gap-4 w-fit mx-auto px-20 items-center border-t pt-4">
        {socials.map(({ id, icon }) => (
          <button
            key={id}
            aria-label="icon"
            className="border rounded-full !duration-100 p-4 text-xl text-Dark hover:text-Orange"
          >
            {icon}
          </button>
        ))}
      </div>

      {/* more blogs */}
      <div className="grid xl:grid-cols-2 gap-10">
        <SectionHeader
          className="xl:sticky top-10 h-fit !w-[100%] flex-col"
          title="news stuff idk"
          header="Related blogs journals"
          text="we offer a wide range of services to help businesses have
            organization address various challengs."
        >
          <OrangeButton text="All Blogs" tag="a" to="/blogs" />
        </SectionHeader>
        <div className="space-y-10">
          {blogs.slice(3, 7).map((blog, i) => (
            <BlogCard {...blog} i={i} key={blog.title} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

const BlogContentShit = ({ id }) => {
  return (
    <div className="flex [&_p]:text-lg items-start gap-10 sm:w-[80%] mx-auto">
      <img
        src="/blogs/text-image.png"
        className="max-lg:hidden"
        alt="text image blog"
      />
      <div className="sm:space-y-20 space-y-10">
        <RevealElement y>
          <p>
            On the Questo mobile app, gamified tours in the cities of
            Belogradchik, Vidin, and Vratsa now take you on a trip to reveal
            pieces of design and development of solar modules of rich various
            solar-powered history that just need a little bit of unraveling to
            be appreciated fully.
          </p>
          <p>
            At SGW, we’ve been involved in several exciting projects that have
            enabled us to apply insights you gained from diverse industries to
            the development of solar modules. Our team has successfully
            undertaken the design and development of various solar-powered
            products, ranging from small-scale, solar-powered electronics to
            larger infrastructure and industrial solutions. These projects have
            us plenty of interesting engineering challenges.
          </p>
        </RevealElement>
        <div className="relative">
          <RevealElement offset={0.4} scaleX noOpacity childClass="bg-white">
            <div></div>
          </RevealElement>
          <RevealElement scale noOpacity offset={0.4}>
            <img
              className="aspect-[16/9] w-full"
              src={id == 1 ? blogs[1].img : blogs[2].img}
              alt="blog img"
            />
          </RevealElement>
        </div>
        <RevealElement y>
          <p>
            For example, unlike typical indoor products, solar projects are
            designed for outdoor use and must be rugged enough to withstand
            day-to-day wear and tear, and also need to endure storms, rain, and
            prolonged exposure to UV radiation — all without compromising
            functionality
          </p>
        </RevealElement>
        <div className="space-y-10">
          <RevealElement y>
            <h1 className="text-5xl">Procedure</h1>
            <p>
              Solar panels alone often prove inadequate to power a product or
              system effectively. To address this, we incorporate onboard
              batteries to provide supplementary power. However, the temperature
              can influence battery performance, workshop provides particularly
              charging and discharging.
            </p>
            <ul className="list-disc m-7 font-bold">
              <li>Diversity investigation for royal been.</li>
              <li>
                Create a structure where participants will add their
                information.
              </li>
              <li>Many contradicting opinions a vision document.</li>
              <li>A deliverable for workshop participants.</li>
            </ul>
          </RevealElement>
        </div>
      </div>
    </div>
  );
};
