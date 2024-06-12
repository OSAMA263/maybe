import { motion, useTransform } from "framer-motion";

export default function TextAnimation({ scrollYProgress }) {
  const text = [
    { text: "We believe in power individual contribution", value: [0, 0.125] },
    { text: "the fire at the heart web we back the", value: [0.125, 0.25] },
    { text: "founder of new form network digital", value: [0.25, 0.375] },
    {
      text: "analytics that harness the talent individual",
      value: [0.375, 0.5],
    },
    {
      text: "for benefit of the collective togethers we're",
      value: [0.5, 0.625],
    },
    { text: "shap world where ownership collaboration", value: [0.625, 0.75] },
    { text: "innovation thrive beyond traditional", value: [0.75, 0.875] },
    { text: "boundaries.", value: [0.875, 1] },
  ];

  return (
    <div className="relative font-semibold xl:text-4xl tex-2xl">
      <div className="relative">
        {text.map((line, i) => (
          <SingleLine key={i} {...{ line, scrollYProgress }} />
        ))}
      </div>
    </div>
  );
}
const SingleLine = ({ scrollYProgress, line }) => {
  const { text, value } = line;
  const width = useTransform(scrollYProgress, value, ["0%", "100%"]);

  return (
    <div className="relative max-w-fit">
      <motion.div
        style={{ width }}
        className="absolute max-sm:hidden top-0 overflow-hidden [&>p]:text-Dark transition-all duration-700 "
      >
        <motion.p className="h-full w-full sm:min-w-max">{text}</motion.p>
      </motion.div>
      <p className="max-w-fit">{text}</p>
    </div>
  );
};
