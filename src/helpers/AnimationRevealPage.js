import React from "react";

// Importing twin.macro for CSS-in-JS
import tw from "twin.macro";

// Importing framer-motion and useInView here to animate the sections when they're in view
import { motion } from "framer-motion";
import useInView from "./useInView";

// Defining a styled div using twin.macro with some common styles for the page
const StyledDiv = tw.div`
  bg-holiness
  font-sans 
  min-h-screen 
  text-go
  p-8
  overflow-hidden
`;

// AnimationReveal component that provides animation for the page content
function AnimationReveal({ disabled, children }) {
  // If disabled prop is true, render the children without animation
  if (disabled) {
    return <>{children}</>;
  }

  // If children is not an array, convert it to an array
  if (!Array.isArray(children)) children = [children];

  // Define the directions for the slide-in animation
  const directions = ["left", "right"];

  // Apply slide-in animation to each child element
  const childrenWithAnimation = children.map((child, i) => {
    // Alternate between the left and right directions for each element
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });

  // Return the children with slide-in animation
  return <>{childrenWithAnimation}</>;
}

// AnimatedSlideInComponent component that applies the slide-in animation to a child element
function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  // Use the useInView hook to check if the component is in view
  const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px`});

  // Define the initial and target positions for the animation
  const x = { target: "0%" };
  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  // Return the child element wrapped in a motion section with the slide-in animation
  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{ 
          x: inView && x.target,
          transitionEnd:{
            x: inView && 0
          }
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

// Exporting the AnimationRevealPage component
export default (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
