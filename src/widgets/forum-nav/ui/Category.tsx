'use client';

import { FORUM_BASE_URL } from '@/shared';
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
      className={`text-xl font-bold text-slate-400 ${isCurrentCategory ? 'text-slate-950 ' : ''}`}
    >
      <Link href={`${FORUM_BASE_URL + categoryKey}`}>{category}</Link>
    </li>
  );
}
