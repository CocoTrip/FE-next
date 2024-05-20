'use client';

import { useCarousel } from '@/shared';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default function HotPostsCarousel() {
  const { carouselStartIndex, nextItem, prevItem } = useCarousel(3);
  return (
    <div className="relative flex w-full justify-center overflow-hidden px-8 py-4">
      <ul className=" flex w-full justify-between overflow-hidden">
        <button
          type="button"
          className="absolute left-0 top-2/4 z-10 -translate-y-2/4  text-4xl disabled:hidden"
          aria-label="이전 슬라이드"
          onClick={prevItem}
          disabled={carouselStartIndex === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        {new Array(10).fill(1).map((_, idx) => (
          <li
            key={idx}
            className=" aspect-video w-1/3 flex-shrink-0  transition-transform"
            style={{
              transform: `translateX(-${carouselStartIndex * 100}%)`,
            }}
          >
            <div className="mx-2 h-full bg-gray-100"></div>
          </li>
        ))}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl disabled:hidden"
          type="button"
          aria-label="다음 슬라이드"
          onClick={nextItem}
          disabled={carouselStartIndex === 7}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </ul>
    </div>
  );
}
