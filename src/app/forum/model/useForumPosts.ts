/* eslint-disable react-hooks/exhaustive-deps */
import { Post } from '@/shared';
import { useCallback, useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';

const useForumPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>('');
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleFetchPosts = useCallback(async () => {
    if (loading || category === '') return;
    setLoading(true);
    setError('');
    try {
      const newPosts = await fetchPosts(category, page);
      setPosts(prev => [...prev, ...newPosts]);
      setHasMore(newPosts.length > 0);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('예상치 못한 에러 발생');
      }
    } finally {
      setLoading(false);
    }
  }, [category, page]);

  useEffect(() => {
    handleFetchPosts();
  }, [handleFetchPosts]);
  return { posts, loading, error, hasMore, category, setCategory, setPage };
};
export default useForumPosts;
