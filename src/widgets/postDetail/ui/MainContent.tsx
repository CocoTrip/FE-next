import { Post } from '../types/post';

export default function MainContent({ post }: { post: Post }) {
  return <div>{post.contents}</div>;
}
