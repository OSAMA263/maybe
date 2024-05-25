import React from "react";

export default function Blogs() {
  return (
    // <div className="pt-40">
    //   <div className="relative flex gap-20">
    //     <div className="sticky top-0 h-fit">
    //       <h1>something news</h1>
    //     </div>
    //     <div className="sticky top-0 h-fit">
    //       <h1>Latest news jornals</h1>
    //       <p>
    //         we offer a wide range of services to help businesses have
    //         organization address various challengs.
    //       </p>
    //     </div>
    //     <div>
    //       {Array.from({ length: 20 }).map((_, i) => (
    //         <BlogCard key={i} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <SingleBlog />
  );
}

const BlogCard = () => {
  return (
    <div className="flex items-center gap-x-4 border">
      {/* card image */}
      <div>
        <img src="" alt="" />
      </div>
      {/* card details */}
      <div className="space-y-6">
        <div className="space-4 border-b">
          <span>icon text</span>
          <span>-</span>
          <span>icon text</span>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          repellat!
        </h1>
        <button>mainbutton</button>
      </div>
    </div>
  );
};
const SingleBlog = () => {
  return (
    <div className="pt-40 space-y-10">
      <div>
        <div className="space-y-14">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            nobis.
          </h1>
          <div className="border-t space-x-4">
            <span>icons title</span>
            <span>-</span>
            <span>icon text</span>
          </div>
        </div>
        <img src="" alt="" />
      </div>
      <div className="flex">
        <img src="" alt="" />
        <div className="space-y-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            laudantium? laudantium? laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eos, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eos, laudantium?
          </p>
          <img src="" alt="" />

        </div>
      </div>

      {/* more blogs */}
      
    </div>
  );
};
