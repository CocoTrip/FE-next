import { GoBackButton, WriteForm } from '@/widgets';

export default function page() {
  return (
    <div className="relative">
      <GoBackButton />
      <div className="my-6 flex justify-center">
        <h2 className="text-xl font-bold">글 작성</h2>
      </div>
      <div>
        <WriteForm />
      </div>
    </div>
  );
}
