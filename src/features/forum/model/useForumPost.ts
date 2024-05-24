'use client';

import { Post } from '@/shared';
import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { fetchPost } from '../api/posts';

const useForumPost = (
  postId: number,
): QueryObserverResult<Post | undefined> => {
  const postQuery = useQuery<Post | undefined>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });
  return postQuery;
};

export default useForumPost;
