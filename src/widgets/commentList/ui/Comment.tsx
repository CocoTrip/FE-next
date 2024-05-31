import { formatDate } from '@/shared';
import { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { CommentT } from '../types/comment';

export default function Comment({ comment }: { comment: CommentT }) {
  const [isShowedSeeMore, setIsShowedSeeMore] = useState<boolean>(false);
  return (
    <li className="relative space-y-2 border-t py-6">
      <div className="absolute right-0">
        <button
          type="button"
          aria-label="see more"
          onClick={() => setIsShowedSeeMore(!isShowedSeeMore)}
        >
          <IoMdMore className="text-2xl" />
        </button>
        <div
          className={`absolute right-0 flex ${isShowedSeeMore ? '' : 'hidden'}  w-24 flex-col rounded border border-gray-200`}
        >
          <button className="px-4 py-1 hover:bg-gray-100" type="button">
            수정
          </button>
          <div className="border-t" />
          <button className="px-4 py-1 hover:bg-gray-100" type="button">
            삭제
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="h-[30px] w-[30px] rounded-full bg-gray-100 text-transparent">
          이미지
        </div>
        <p>{comment.author}</p>
        <p className="text-gray-400">{formatDate(new Date(comment.date))}</p>
      </div>
      <div>
        <p>{comment.content}</p>
      </div>
    </li>
  );
}
