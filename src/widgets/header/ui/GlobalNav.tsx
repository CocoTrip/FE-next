import Link from 'next/link';
import { GLOBAL_NAV_ITEMS } from '../const/global-nav';

export default function GlobalNav() {
  return (
    <nav className="flex justify-around space-x-2  font-bold">
      {Object.keys(GLOBAL_NAV_ITEMS).map(key => (
        <Link href={`/${key}`} key={key}>
          {GLOBAL_NAV_ITEMS[key]}
        </Link>
      ))}
    </nav>
  );
}
