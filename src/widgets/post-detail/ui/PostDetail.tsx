'use client';

import { Loading } from '@/shared';
import { Like } from '@/features';
import MainContent from './MainContent';
import PostHeader from './PostHeader';
import usePost from '../model/usePost';
import CommentList from './CommentList';

export default function PostDetail({ postId }: { postId: number }) {
  const { data, isLoading } = usePost(postId);
  if (isLoading) return <Loading />;
  if (!data) return <p>데이터가 없습니다.</p>;
  return (
    <>
      <section className="mt-16 space-y-10">
        <PostHeader post={data} />
        <MainContent post={data} />
      </section>
      <section className="relative mt-16">
        <div className="absolute right-5 flex items-center  space-x-2 text-xl ">
          <Like />
          <span>{data.likes}</span>
        </div>
        <CommentList postId={postId} commentCount={data.comments} />
      </section>
    </>
  );
}
