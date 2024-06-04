import GlobalNav from './GlobalNav';
import LoginLink from './LoginLink';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Logo />
      </div>
      <div className="flex-grow">
        <GlobalNav />
      </div>
      <div className="px-6">
        <LoginLink />
      </div>
    </header>
  );
}
