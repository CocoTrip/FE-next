import { ForumNav, ForumPostList } from '@/widgets';

export default function ForumPage() {
  return (
    <>
      <div>
        <ForumNav category="all" />
      </div>
      <div className="mt-8 w-full">
        <ForumPostList />
      </div>
    </>
  );
}
