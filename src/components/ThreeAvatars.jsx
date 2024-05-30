export default function ThreeAvatars({ borderColor = "[&_img]:border-white" }) {
  return (
    <div className={`flex items-center ${borderColor}`}>
      <div className="relative">
        <img
          src="/avatar1.png"
          className="rounded-full border-[6px]"
          alt="ceo1"
        />
      </div>
      <div className="relative">
        <img
          src="/avatar2.png"
          className="rounded-full border-[6px] z-[2] -translate-x-4"
          alt="ceo12"
        />
      </div>
      <div className="relative">
        <img
          src="/avatar3.png"
          className="rounded-full border-[6px] z-[3] -translate-x-8"
          alt="ceo13"
        />
      </div>
    </div>
  );
}
