import { useQuery } from '@tanstack/react-query';
import fetchComments from '../api/fetchComments';

const usePostComments = (postId: number) => {
  const commentsQuery = useQuery({
    queryKey: ['comment', postId],
    queryFn: () => fetchComments(postId),
  });
  return commentsQuery;
};

export default usePostComments;
