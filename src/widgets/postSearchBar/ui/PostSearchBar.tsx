import { IoSearchOutline } from 'react-icons/io5';

export default function PostSearchBar() {
  return (
    <div className="flex w-full items-center space-x-2 rounded-md bg-gray-100 p-4">
      <span>
        <IoSearchOutline className="text-2xl" />
      </span>
      <input
        type="text"
        className="w-full  bg-gray-100 outline-none "
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
}
