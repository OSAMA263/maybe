import CountUp from "react-countup";

export default function CountUpNumber({ number, text,...rest }) {
  return (
    <div className="space-y-3 relative text-center text-balance">
      <span
        className={`text-8xl font-semibold relative ${rest.className || ""}`}
      >
        <small className="text-3xl rounded-full px-1 absolute right-0 bg-white text-Orange">
          +
        </small>
        <CountUp
          className="text-"
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={0.3}
          duration={2}
          useEasing={false}
          end={number}
        ></CountUp>
      </span>
      <p className="text-xl">{text}</p>
    </div>
  );
}
