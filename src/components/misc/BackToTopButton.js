import React, { useState } from "react";
import tw from "twin.macro";
import { ReactComponent as ChevronUp } from "feather-icons/dist/icons/chevron-up.svg";

const ChevronButton = tw(ChevronUp)`cursor-pointer z-50 bg-go-500 hocus:bg-holiness hocus:text-go-500 hocus:border-2 text-holiness rounded-full w-12 h-12 fixed bottom-0 right-0 m-8`;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add an event listener to the window to toggle visibility
  window.addEventListener('scroll', scrollToTop);

  return (
    <div className={`${isVisible ? "opacity-100" : "opacity-0"}`}>
      <ChevronButton onClick={handleClick}/>
    </div>
  );
};

export default BackToTopButton;