import { formatDate, FORUM_BASE_URL } from '@/shared';
import { Post } from '@/widgets/post-detail/types/post';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiaCommentSolid } from 'react-icons/lia';
import { PiThumbsUp } from 'react-icons/pi';

export default function ForumPost({ post }: { post: Post }) {
  const pathName = usePathname();
  return (
    <li id={`post-${post.postId}`} className=" ">
      <Link
        href={`${FORUM_BASE_URL}/posts/${post.postId}?prev_url=${encodeURIComponent(pathName)}`}
        className="flex h-[236px] w-full items-center space-y-2 border-b px-4 py-8"
      >
        <div className="grow space-y-4">
          <div className="flex items-center">
            <div className="ml-2 mr-8 h-[50px] w-[50px] rounded-full bg-gray-100 text-transparent">
              이미지
            </div>
            <div>
              <p>{post.writer}</p>
              <p className="text-sm text-gray-400">
                {formatDate(new Date(post.createdAt))}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[18px] font-bold">{post.title}</p>
            <p className="text-gray-500">{post.contents}</p>
          </div>
          <div className="flex justify-end space-x-4 ">
            <div className="flex items-center space-x-2">
              <span>
                <PiThumbsUp className="text-xl" />
              </span>
              <p>{post.likes}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <LiaCommentSolid className="text-xl" />
              </span>
              <p>{post.comments}</p>
            </div>
          </div>
        </div>
        <div className="ml-12 mr-8 h-[128px] w-[128px] bg-gray-100 text-transparent">
          이미지
        </div>
      </Link>
    </li>
  );
}
