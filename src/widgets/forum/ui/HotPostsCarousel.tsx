'use client';

import { useCarousel } from '@/shared';
import Link from 'next/link';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const BREAK_POINTS: { [key: number]: number } = {
  320: 1,
  768: 2,
  1024: 3,
};

const WIDTH: { [key: number]: string } = {
  1: 'w-full',
  2: 'w-1/2',
  3: 'w-1/3',
};

export default function HotPostsCarousel() {
  const { carouselStartIndex, visibleSlides, nextItem, prevItem } = useCarousel(BREAK_POINTS, 10, true, 6000, true);
  return (
    <div className="relative flex w-full justify-center overflow-hidden px-8 py-4">
      <ul className=" flex w-full justify-between overflow-hidden">
        <button
          type="button"
          className="absolute left-0 top-2/4 z-10 -translate-y-2/4  text-4xl disabled:hidden"
          aria-label="이전 슬라이드"
          onClick={prevItem}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        {new Array(10).fill(1).map((_, idx) => (
          <li
            key={idx}
            className={` ${WIDTH[visibleSlides]} h-[200px] flex-shrink-0 text-white transition-transform`}
            style={{
              transform: `translateX(-${carouselStartIndex * 100}%)`,
            }}
          >
            <Link
              href="/"
              className="relative mx-2 block h-full space-y-2 rounded-md bg-gray-100 p-4"
            >
              POST
            </Link>
          </li>
        ))}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl disabled:hidden"
          type="button"
          aria-label="다음 슬라이드"
          onClick={nextItem}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </ul>
    </div>
  );
}
