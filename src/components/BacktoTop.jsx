import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const height = window.innerHeight;

      setIsVisible(scrollPosition > height);
    };
    // attach a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // clean up - to avoid memory leak or overload
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <a href="toTop">
        43
        <button className="h-20 w-20 rounded-full bg-black flex items-center justify-center fixed bottom-8 right-8">
          <FaArrowUp size={26} className="text-white" />
        </button>
      </a>
    </div>
  );
};

export default BacktoTop;
