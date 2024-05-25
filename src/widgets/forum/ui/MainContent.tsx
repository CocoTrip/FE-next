import { Post } from '@/shared';

export default function MainContent({ post }: { post: Post }) {
  return <div>{post.contents}</div>;
}
