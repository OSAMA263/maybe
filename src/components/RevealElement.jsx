import { motion } from "framer-motion";
import { Children, cloneElement } from "react";
import { useInView } from "react-intersection-observer";

export default function RevealElement({ children, ...rest }) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <RevealChild key={index} {...rest}>
          {child}
        </RevealChild>
      ))}
    </>
  );
}

function RevealChild(props) {
  const {
    children,
    className = "",
    childClass = "",
    scaleX,
    scaleY,
    offset,
    ...rest
  } = props;

  const { ref, inView } = useInView({
    threshold: offset ?? 1,
    triggerOnce: false,
  });

  return (
    <div className={`overflow-hidden pb-2 ${className}`} ref={ref}>
      <motion.div
        style={{
          originX: scaleX && 0,
          originY: scaleY && 1,
          transformOrigin: scaleY ? "bottom" : scaleX ? "right" : "",
        }}
        {...animations}
        className={childClass}
        custom={{ inView, scaleX, scaleY, ...rest }}
      >
        {children && cloneElement(children)}
      </motion.div>
    </div>
  );
}

const animations = {
  initial: ({ rotate, x, y, scale, noOpacity }) => ({
    y: y ? "80%" : "0%",
    x: x ? "-100%" : "0%",
    scale: scale ? 1.6 : 1,
    scaleY: 1,
    scaleX: 1,
    rotate: rotate ?? 0,
    opacity: noOpacity ? 1 : 0,
  }),
  animate: ({ inView, rotate, y, x, scale, scaleY, scaleX, noOpacity }) => ({
    y: inView ? "0%" : y ? "80%" : "0%",
    x: inView ? "0%" : x ? "-100%" : "0%",
    scale: inView ? 1 : scale ? 1.6 : 1,
    scaleY: scaleY ? (inView ? 0 : scaleY ? 1 : 0) : 1,
    scaleX: scaleX ? (inView ? 0 : scaleX ? 1 : 0) : 1,
    rotate: inView ? 0 : rotate ?? 0,
    opacity: inView ? 1 : noOpacity ? 1 : 0,
  }),
  transition: {
    rotate: { duration: 1 },
    scale: { duration: 1 },
    scaleX: { duration: 1 },
    scaleY: { duration: 1 },
    opacity: { duration: 0.9 },
    x: { duration: 0.7 },
    y: { duration: 0.7 },
  },
};
