import { MutableRefObject, useEffect, useRef, useState } from "react";

const options = { threshold: [1] };

const useInView = (): {
  ref: MutableRefObject<null>;
  isInView: boolean;
} => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (ref.current) {
      observer.observe(ref?.current);
    }

    // always cleanup
    return () => observer.disconnect();
  }, []);

  return { isInView, ref };
};

export default useInView;

// usage of intersection observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// best resources: https://blog.webdevsimplified.com/2022-01/intersection-observer/
//https://uploadcare.com/blog/intersection-observer-guide/

//best illustration: https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/
