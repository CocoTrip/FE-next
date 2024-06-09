'use client';

import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';
import { fetchPost } from '../api/fetchPost';

const usePost = (postId: number): QueryObserverResult<Post | undefined> => {
  const postQuery = useQuery<Post | undefined>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });
  return postQuery;
};

export default usePost;
