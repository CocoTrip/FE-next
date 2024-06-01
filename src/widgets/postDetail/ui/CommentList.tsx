import CommentInput from './CommentInput';
import usePostComments from '../model/usePostComments';
import Comment from './Comment';

export default function CommentList({
  postId,
  commentCount,
}: {
  postId: number;
  commentCount: number;
}) {
  const { data: comments } = usePostComments(postId);

  return (
    <div>
      <div className="text-xl">
        <p>
          댓글 <span className="font-bold">{commentCount}</span>
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
