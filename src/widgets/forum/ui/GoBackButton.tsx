import Link from 'next/link';
import { GrPrevious } from 'react-icons/gr';

export default function GoBackButton({ prevUrl }: { prevUrl: string }) {
  const routes: string[] = prevUrl.split('/');
  const prevPage: string =
    routes[routes.length - 1] === 'home' ? '홈' : '커뮤니티';
  return (
    <Link href={prevUrl} className="space-x-2">
      <GrPrevious /> <span>{prevPage}</span>
    </Link>
  );
}
