import { CATEGORIES, Post } from '@/shared';

export default function PostCard({ post }: { post: Post }) {
  return (
    <li className=" flex h-[200px] w-[600px] flex-col justify-center border-b px-4">
      <div className="flex space-x-4 text-xl font-bold">
        <p className="text-blue-400">{CATEGORIES[post.category]}</p>
        <span className="font-normal text-slate-300">|</span>
        <p className="">{post.title}</p>
      </div>
      <div className="flex space-x-4 py-4">
        <p className="text-sm">{post.contents}</p>
      </div>
      <div className="flex space-x-2 text-sm">
        {post.tags?.map(tag => (
          <p
            key={tag}
            className="rounded bg-blue-50 px-2 py-1 font-bold text-slate-500"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex space-x-4 pb-1  pt-2 text-xs">
        <p>좋아요 {post.likes}</p>
        <p>조회수 {post.viewCount}</p>
      </div>
      <div className="flex space-x-4 text-xs">
        <p>{post.writer}</p>
        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    </li>
  );
}
