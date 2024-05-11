import ForumNav from './ui/ForumNav';

export default function Category({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <div className="w-[300px] space-y-8">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold">위드펫 커뮤니티</h2>
        <p className="text-slate-500">
          반려동물 동반 여행 이야기를
          <br />
          위드펫 사용자와 공유해보세요.
        </p>
      </div>
      <ForumNav category={category} />
    </div>
  );
}
