import { formatDate, Post } from '@/shared';

export default function PostHeader({ post }: { post: Post }) {
  return (
    <header className="space-y-2">
      <div className="text-sm font-bold">
        <p>{post.category}</p>
      </div>
      <div className="text-xl font-bold">
        <h2>{post.title}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="h-[40px] w-[40px] rounded-full bg-gray-100 text-transparent">
          이미지
        </div>
        <div className="text-sm">
          <p>{post.writer}</p>
          <p className="text-gray-400">
            {formatDate(new Date(post.createdAt))}
          </p>
        </div>
      </div>
    </header>
  );
}
