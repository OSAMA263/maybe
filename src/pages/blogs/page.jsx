import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { blogs } from "./data";

export default function Blogs() {
  return (
    <>
      <div className="pt-40 container-layout">
        <div className="relative flex gap-20">
          <SectionHeader
            className="sticky top-10 h-fit"
            title="Something news"
            header="Latest news journals"
            text="we offer a wide range of services to help businesses have
            organization address various challengs."
          />
          <div className="space-y-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

const BlogCard = ({title,img}) => {
  return (
    <Link to="/blogs/1" className="block grid grid-cols-2 gap-6 border">
      {/* card image */}
      <div>
        <img src={img} alt={title} />
      </div>
      {/* card details */}
      <div className="space-y-6">
        <div className="space-4 border-b">
          <span>icon text</span>
          <span>-</span>
          <span>icon text</span>
        </div>
        <h1>
          {title}
        </h1>
        <button>mainbutton</button>
      </div>
    </Link>
  );
};
