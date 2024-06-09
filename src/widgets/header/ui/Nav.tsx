import { RxHamburgerMenu } from 'react-icons/rx';

export default function Nav() {
  return (
    <nav className="flex items-center">
      <button type="button" aria-label="메뉴 열기">
        <RxHamburgerMenu className="h-[24px] w-[32px]" />
      </button>
    </nav>
  );
}
