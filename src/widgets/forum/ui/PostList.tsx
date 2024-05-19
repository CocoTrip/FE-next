'use client';

import useInfiniteScroll from '@/shared/hooks/useInfiniteScroll';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import useForumPosts from '@/features/forum/model/useForumPosts';
import PostCard from '@/entities/forum/ui/PostCard';

export default function ForumPostList() {
  const pathName = usePathname();
  const { posts, loading, error, setPage, hasMore, setCategory } =
    useForumPosts();
  const loadMoreRef = useInfiniteScroll(
    () => setPage(prev => prev + 1),
    hasMore,
  );

  useEffect(() => {
    const splitedPathName: string[] = pathName.split('/');
    setCategory(splitedPathName[splitedPathName.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <ul>
      {posts.map(post => (
        <PostCard key={post.postId} post={post} />
      ))}
      <div ref={loadMoreRef} />
      {loading && <li>Loading...</li>}
      {error && <li>Error: {error}</li>}
    </ul>
  );
}
