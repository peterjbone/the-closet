import styles from "./scroll.module.css";
import { HiArrowCircleUp } from "react-icons/hi";

import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <HiArrowCircleUp size={40} />
    </button>
  );
};

export default ScrollToTopButton;
