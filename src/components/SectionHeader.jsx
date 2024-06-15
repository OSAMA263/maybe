import RevealElement from "./RevealElement";

export default function SectionHeader(props) {
  const { title, header, text, className = "", children } = props;
  return (
    <div
      className={`flex 2xl:gap-20 gap-8 *:text-balance items-start xl:w-[60%] max-sm:flex-col ${className}`}
    >
      <RevealElement y className="ps-4 border-l-4 border-Orange min-w-max">
        <span>{title}</span>
      </RevealElement>
      <div className="space-y-8">
        <RevealElement y>
          <h1 className="xl:text-6xl sm:text-4xl text-2xl align-baseline">{header}</h1>
          <p className="xl:text-xl text-lg">{text}</p>
          {children && children}
        </RevealElement>
      </div>
    </div>
  );
}
