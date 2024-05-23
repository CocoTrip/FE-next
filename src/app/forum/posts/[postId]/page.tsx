'use client';

import { useForumPost } from '@/features';

export default function Post({ params }: { params: { postId: number } }) {
  const { postId } = params;
  const { data: post, error, isLoading } = useForumPost(postId);
  return <div>{post}</div>;
}
