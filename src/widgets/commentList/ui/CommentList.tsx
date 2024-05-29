import { Post } from '@/shared';
import { Comment } from '@/entities';
import CommentInput from './CommentInput';
import usePostComments from '../model/usePostComments';

export default function CommentList({ post }: { post: Post }) {
  const { data: comments } = usePostComments(post.postId);

  return (
    <div>
      <div className="text-xl">
        <p>
          댓글 <span className="font-bold">{post.comments}</span>
        </p>
      </div>
      <div className=" mt-4 flex items-center space-x-6 border-t py-6">
        <div className="h-[40px] w-[40px] rounded-full bg-gray-100" />
        <div className="flex-grow">
          <CommentInput />
        </div>
        <div>
          <button type="button" className="rounded-xl bg-gray-200 px-6 py-2">
            등록
          </button>
        </div>
      </div>
      <div>
        <ul>
          {comments?.map(comment => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
        </ul>
      </div>
    </div>
  );
}
