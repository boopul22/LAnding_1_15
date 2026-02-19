import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    // Trigger once on load to show elements already in view
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
};
