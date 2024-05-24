'use client';

import { useForumPost } from '@/features';
import { Loading } from '@/shared';
import { GoBackButton } from '@/widgets';
import { useSearchParams } from 'next/navigation';

export default function Post({ params }: { params: { postId: number } }) {
  const { postId } = params;
  const { data: isLoading } = useForumPost(postId);
  const searchParams = useSearchParams();
  const prevUrl: string = searchParams.get('prev_url') || '/forum/all';
  if (isLoading) return <Loading />;
  return (
    <div>
      <div>
        <GoBackButton prevUrl={decodeURIComponent(prevUrl)} />
      </div>
    </div>
  );
}
