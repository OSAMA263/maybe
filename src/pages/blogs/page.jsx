import SectionHeader from "../../components/SectionHeader";
import { blogs } from "./data";
import { OrangeButton } from "../../components/Buttons";
import { FaRegCalendarAlt, FaRegBookmark } from "react-icons/fa";
import tw from "tailwind-styled-components";

export default function Blogs() {
  return (
    <>
      <div className="pt-40 container-layout">
        <div className="relative grid grid-cols-2 gap-4">
          <SectionHeader
            className="sticky top-10 h-fit !w-[100%]"
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
      </div>
    </>
  );
}

export const BlogCard = (props) => {
  const { thumbnail, i, title, ...rest } = props;
  return (
    <div className="grid grid-cols-3 gap-10 border">
      {/* card image */}
      <div>
        <img
          src={thumbnail}
          className="h-full w-full"
          width={480}
          alt={title}
        />
      </div>
      {/* card details */}
      <div className="flex col-span-2 flex-col gap-6 justify-around py-8 px-4">
        <CategoryAndDate {...rest} />
        <h1 className="text-3xl transition-all hover:text-Orange">{title}</h1>
        {/* footer ish */}
        <OrangeButton
          tag="a"
          to={`/blogs/${i+1}`}
          text="Read More"
          className="text-base"
        />
      </div>
    </div>
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
const CardBody = tw.div`
border-b
[&>span]:flex
[&>span]:items-center
[&>span]:gap-2
flex
items-center
w-fit
pb-2
text-Gray
gap-3
`;
