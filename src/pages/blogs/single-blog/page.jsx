import { useParams } from "react-router";

export default function SingleBlog() {
  const { id } = useParams();
  console.log(id);
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eos, laudantium?
            laudantium? laudantium?
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
}
