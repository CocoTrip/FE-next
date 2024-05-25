import { Post } from '@/shared';
import { BiLike } from 'react-icons/bi';

export default function Likes({ post }: { post: Post }) {
  return (
    <div className="flex items-center space-x-3">
      <button type="button" aria-label="Like">
        <BiLike />
      </button>

      <p>{post.likes}</p>
    </div>
  );
}
