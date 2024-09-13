import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed flex justify-center items-center bottom-5 right-5 bg-custom-blue text-white p-3 rounded-full text-sm z-50"
        aria-label="Go to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default GoToTop;
