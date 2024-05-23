'use client';

import { Post } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../api/posts';

const useForumPost = (postId: number) => {
  const postQuery = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });
  return postQuery;
};

export default useForumPost;
