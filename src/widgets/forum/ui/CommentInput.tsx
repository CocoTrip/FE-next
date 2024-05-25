import { Post } from '@/shared';

export default function CommentCreater({ post }: { post: Post }) {
  return (
    <textarea className="h-24 w-full rounded border border-gray-300 p-2 leading-normal outline-none	" />
  );
}
