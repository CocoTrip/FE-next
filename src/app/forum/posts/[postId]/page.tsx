import { GoBackButton, PostDetail } from '@/widgets';

export default function Post({ params }: { params: { postId: number } }) {
  const { postId } = params;

  return (
    <div>
      <section>
        <GoBackButton />
      </section>
      <PostDetail postId={postId} />
    </div>
  );
}
