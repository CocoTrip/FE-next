'use client';

import { useState } from 'react';

const useCarousel = (initialVisibleSlides: number) => {
  const [carouselStartIndex, setCarouselStartIndex] = useState<number>(0);
  const [visibleSlides, setVisibleSlides] =
    useState<number>(initialVisibleSlides);

  const nextItem = () => {
    setCarouselStartIndex(carouselStartIndex + 1);
  };
  const prevItem = () => {
    setCarouselStartIndex(carouselStartIndex - 1);
  };

  return {
    carouselStartIndex,
    visibleSlides,
    setVisibleSlides,
    nextItem,
    prevItem,
  };
};

export default useCarousel;
