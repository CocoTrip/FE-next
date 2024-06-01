'use client';

import { useRef } from 'react';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function WriteForm() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  return (
    <form>
      <div className="mb-6 flex flex-col space-y-2">
        <label htmlFor="select" className=" font-bold">
          게시판
        </label>
        <select
          defaultValue="place-review"
          id="select"
          className="rounded-md bg-gray-100 p-2 outline-none"
        >
          <option value="share-plan">여행일정공유</option>
          <option value="place-review">장소후기</option>
          <option value="boast-my-coco">내새끼자람</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          className="gray w-full border-b p-2 text-xl outline-none"
          type="text"
          minLength={2}
          maxLength={20}
          placeholder="제목을 적어주세요"
        />
      </div>
      <div className="min-h-min ">
        <textarea
          onInput={handleInput}
          ref={textareaRef}
          placeholder="나누고 싶은 이야기를 적어주세요"
          className="min-h-min w-full resize-none  p-2 outline-none"
          minLength={10}
          maxLength={300}
          rows={1}
        />
      </div>
      <button
        type="submit"
        className="absolute right-0 top-0 rounded-md bg-gray-100 px-4 py-2 outline-none hover:bg-gray-200"
      >
        게시
      </button>
    </form>
  );
}
