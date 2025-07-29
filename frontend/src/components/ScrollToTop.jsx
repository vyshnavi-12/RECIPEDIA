import { useState, useEffect } from 'react';
//import '../styles/ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 30);
  }

  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  },[]);

  return(
    <div className="fixed bottom-7 right-7 z-50">
      {isVisible && (
        <div>
          <button
            onClick={handleScroll}
            className="relative w-10 h-10 rounded-full bg-red-500 shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
