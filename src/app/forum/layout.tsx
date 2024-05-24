import React from 'react';
import { HotPostsSlider } from '@/widgets';

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1024px] px-6 py-8 text-slate-900">
      <div className="flex flex-col items-center ">
        <div className="space-y-6">
          <h2 className="text-center text-4xl font-bold">커뮤니티</h2>
          <p className="text-lg">
            반려인과 반려동물을 위한 정보를 함께 공유해보세요!
          </p>
        </div>
        <div className="mt-20  flex w-full flex-col items-start space-y-4">
          <h3 className="ml-10 text-2xl font-bold">HOT 게시물</h3>
          <HotPostsSlider />
        </div>
        <div className="mb-4 mt-8 h-1 w-full border-t " />
        {children}
      </div>
    </div>
  );
}
