export default function SectionHeader(props) {
  const { title, header, text, className = "" } = props;

  return (
    <div className={`flex gap-20 text-pretty items-start w-[60%] ${className}`}>
      <span className="ps-4 border-l-4 border-Orange min-w-max">{title}</span>
      <div className="space-y-4">
        <h1 className="text-7xl align-baseline">{header}</h1>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
}
