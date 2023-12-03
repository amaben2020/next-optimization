import { useEffect, useRef, useState } from "react";

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    if (ref.current) {
      observer.observe(ref?.current);
    }
  }, []);

  return { isInView, ref };
};

export default useInView;

// usage of intersection observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
