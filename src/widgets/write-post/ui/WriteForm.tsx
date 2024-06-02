'use client';

import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function WriteForm() {
  const [content, setContent] = useState<string>('');
  const modules = {
    toolbar: {
      container: [['image']],
    },
  };
  const handleContentChange = (value: string) => {
    setContent(value);
  };
  return (
    <form>
      <div className="mb-6 flex flex-col space-y-2">
        <label htmlFor="select" className=" font-bold">
          게시판
        </label>
        <select
          defaultValue="place-review"
          id="category"
          className="rounded-md bg-gray-100 p-2 outline-none"
        >
          <option value="share-plan">여행일정공유</option>
          <option value="place-review">장소후기</option>
          <option value="boast-my-coco">내새끼자랑</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          id="title"
          className="gray w-full border-b p-2 text-xl outline-none"
          type="text"
          minLength={2}
          maxLength={20}
          placeholder="제목을 적어주세요"
        />
      </div>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="나누고 싶은 이야기를 적어주세요"
        className="h-96 border-none"
        modules={modules}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 rounded-md bg-gray-100 px-4 py-2 outline-none hover:bg-gray-200"
      >
        게시
      </button>
    </form>
  );
}
