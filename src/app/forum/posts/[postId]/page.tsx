'use client';

import { Like } from '@/features';
import { Loading } from '@/shared';
import { GoBackButton, MainContent, PostHeader, useForumPost } from '@/widgets';
import CommentList from '@/widgets/commentList/ui/CommentList';
import { useSearchParams } from 'next/navigation';

export default function Post({ params }: { params: { postId: number } }) {
  const { postId } = params;
  const { data: post, isLoading } = useForumPost(postId);
  const searchParams = useSearchParams();
  const prevUrl: string = searchParams.get('prev_url') || '/forum/all';
  if (isLoading || !post) return <Loading />;
  return (
    <div>
      <section>
        <GoBackButton prevUrl={decodeURIComponent(prevUrl)} />
      </section>
      <section className="mt-16 space-y-10">
        <PostHeader post={post} />
        <MainContent post={post} />
      </section>
      <section className="relative mt-16">
        <div className="absolute right-5 text-xl ">
          <Like post={post} />
        </div>
        <CommentList post={post} />
      </section>
    </div>
  );
}
