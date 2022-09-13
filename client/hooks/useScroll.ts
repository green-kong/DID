import { useState, useEffect } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = (e: Event) => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
  };
}

export default useScroll;
