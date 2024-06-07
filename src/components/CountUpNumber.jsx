import CountUp from "react-countup";

export default function CountUpNumber({ number, text, ...rest }) {
  return (
    <div className="space-y-3 relative text-center text-balance">
      <span
        className={`sm:text-8xl text-7xl font-semibold relative ${rest.className || ""}`}
      >
        <small className="sm:text-3xl text-xl rounded-full px-1 absolute right-0 bg-white text-Orange">
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
      {text&&<p className="sm:text-xl">{text}</p>}
    </div>
  );
}
