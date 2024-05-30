import { Link } from "react-router-dom";
function ArrowButton(props) {
  const { tag = "button", text = "Read More", children, ...rest } = props;
  return (
    <div className="arrow-btn font-semibold">
      {children && children}
      {tag === "a" ? (
        <Link {...rest}>{text}</Link>
      ) : (
        <button {...rest}>{text}</button>
      )}
      {/* ARROW */}
      <span className="-translate-x-full opacity-0 transition-all duration-500">
        <img src="/arrow.png" alt="arrow" />
      </span>
    </div>
  );
}

const OrangeButton = (props) => {
  const { tag = "button", text = "Subscribe Now", ...rest } = props;

  return (
    <div className="orange-btn font-semibold">
      <>
        <div id="sliding-bg"></div>
        {tag === "a" ? (
          <Link {...rest}>{text}</Link>
        ) : (
          <button {...rest}>{text}</button>
        )}
      </>
    </div>
  );
};

export { ArrowButton, OrangeButton };
