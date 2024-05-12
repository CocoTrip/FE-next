/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = observerRef.current;
    if (currentElement) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            callback();
          }
        },
        {
          root: null,
          rootMargin: '30px',
          threshold: 1.0,
        },
      );

      if (observerRef.current) {
        observer.observe(currentElement);
      }
      return () => {
        if (observerRef.current) {
          observer.unobserve(currentElement);
        }
      };
    }
    return undefined;
  }, [callback, hasMore]);

  return observerRef;
};
export default useInfiniteScroll;
