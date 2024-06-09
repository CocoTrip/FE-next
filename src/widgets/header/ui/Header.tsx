import { Logo } from '@/shared';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="col-span-full flex h-[60px] items-center justify-between px-4 shadow-sm">
      <Logo />
      <Nav />
    </header>
  );
}
