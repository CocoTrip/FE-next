'use client';

import { FORUMBASEURL } from '@/shared';
import Link from 'next/link';

export default function Category({
  categoryKey,
  category,
  isCurrentCategory,
}: {
  categoryKey: string;
  category: string;
  isCurrentCategory: boolean;
}) {
  return (
    <li
      className={`text-lg font-bold text-slate-400 ${isCurrentCategory ? 'text-slate-950 ' : ''}`}
    >
      <Link href={FORUMBASEURL + categoryKey}>{category}</Link>
    </li>
  );
}
