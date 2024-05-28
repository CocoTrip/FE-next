'use client';

import { formatDate, Post } from '@/shared';
import Comment from './Comment';
import usePostComments from '../model/usePostComments';

export default function Comments({ post }: { post: Post }) {
  const { data: comments } = usePostComments(post.postId);
  return (
    <>
      <div>
        <p>
          댓글 <span className="font-bold">{post.comments}</span>
        </p>
      </div>
      <ul className="mt-6">
        {comments?.map(comment => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </ul>
    </>
  );
}
