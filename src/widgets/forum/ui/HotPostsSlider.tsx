import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export default function HotPostsSlider() {
  return (
    <div className="w-full overflow-hidden">
      <ul className="relative flex w-full  space-x-4 ">
        <span className="absolute left-[-15px] top-2/4 z-10 -translate-y-2/4 text-4xl">
          <MdOutlineKeyboardArrowLeft />
        </span>

        {new Array(10).fill(1).map((_, idx) => (
          <li
            key={idx}
            className=" aspect-video w-1/3 flex-shrink-0 bg-gray-100"
          >
            <span>slide</span>
          </li>
        ))}
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
      </ul>
    </div>
  );
}
