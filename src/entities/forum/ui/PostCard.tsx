import { formatDate, FORUM_BASE_URL, Post } from '@/shared';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PostCard({ post }: { post: Post }) {
  const pathName = usePathname();
  return (
    <li
      id={`post-${post.postId}`}
      className=" flex h-[236px] w-full items-center border-b px-4 py-8"
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
          <Link
            href={`${FORUM_BASE_URL}/${post.category}/${post.postId}?prev_url=${encodeURIComponent(pathName)}}`}
            className="space-y-2"
          >
            <p className="text-[18px] font-bold">{post.title}</p>
            <p className="text-gray-500">{post.contents}</p>
          </Link>
        </div>
        <div className="flex justify-end space-x-4 text-sm">
          <div>
            <p>공감 {post.likes}</p>
          </div>
          <div>
            <p>댓글 {post.comments}</p>
          </div>
        </div>
      </div>
      <div className="ml-12 mr-8 h-[128px] w-[128px] bg-gray-100 text-transparent">
        이미지
      </div>
    </li>
  );
}
