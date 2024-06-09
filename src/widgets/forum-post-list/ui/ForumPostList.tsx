'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useInfiniteScroll } from '@/shared';
import useForumPosts from '../model/useForumPosts';
import ForumPost from './ForumPost';

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
    setCategory(
      splitedPathName[splitedPathName.length - 1] === 'forum'
        ? 'all'
        : splitedPathName[splitedPathName.length - 1],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <ul>
      {posts.map(post => (
        <ForumPost key={post.postId} post={post} />
      ))}
      <div ref={loadMoreRef} />
      {loading && <li>Loading...</li>}
      {error && <li>Error: {error}</li>}
    </ul>
  );
}
