import SectionHeader from "../../components/SectionHeader";
import { blogs } from "./data";
import { OrangeButton } from "../../components/Buttons";
import { FaRegCalendarAlt, FaRegBookmark } from "react-icons/fa";
import tw from "tailwind-styled-components";
import Layout from "../../shared/Layout";
import RevealElement from "../../components/RevealElement";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <Layout
      description="blogs Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat. Eos est harum ullam explicabo, illo consequatur repellat vero illum!"
      title="Meditate - blogs"
      className="container-layout"
    >
      <div className="relative grid xl:grid-cols-2 xl:gap-4 sm:gap-20">
        <SectionHeader
          className="xl:sticky top-10 h-fit !w-[100%]"
          title="Something news"
          header="Latest news journals"
          text="we offer a wide range of services to help businesses have
            organization address various challengs."
        />
        <div className="space-y-10">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} {...blog} i={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const BlogCard = (props) => {
  const { img, i, title, ...rest } = props;
  return (
    <CardContainer>
      {/* card image */}
      <div className="relative [&_img]:hover:scale-110">
        <RevealElement scaleY offset={0.5} noOpacity childClass="bg-Sky">
          <div></div>
        </RevealElement>
        <RevealElement
          className="h-full !pb-0"
          childClass="h-full"
          noOpacity
          scale
        >
          <img src={img} className="h-full w-full" alt={title} />
        </RevealElement>
      </div>
      {/* card details */}
      <div className="flex 2xl:col-span-2 flex-col xl:gap-6 sm:gap-10 gap-4 xl:justify-around py-8 md:px-4 ps-2">
        <CategoryAndDate {...rest} />
        <Link
          to={`/blogs/${i + 1}`}
          className="md:text-3xl font-semibold text-xl hover:text-Orange"
        >
          {title}
        </Link>
        {/* footer ish */}
        <OrangeButton
          tag="a"
          to={`/blogs/${i + 1}`}
          text="Read More"
          className="text-base"
        />
      </div>
    </CardContainer>
  );
};

export const CategoryAndDate = ({ category, date }) => {
  return (
    <CardBody>
      <span>
        <FaRegBookmark />
        {category}
      </span>
      <span>-</span>
      <span>
        <FaRegCalendarAlt />
        {date}
      </span>
    </CardBody>
  );
};
const CardContainer = tw.div`
grid
2xl:grid-cols-3
sm:grid-cols-2
2xl:gap-10
border
rounded-md
overflow-hidden
`;
const CardBody = tw.div`
border-b
[&>span]:flex
[&>span]:items-center
[&>span]:gap-1
flex
items-center
w-fit
pb-2
text-Gray
gap-3
max-sm:text-sm
`;
