import { Logo } from '@/shared';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';

export default function Login() {
  return (
    <div className="h-dvh px-4">
      <div className="flex h-[78%] items-center justify-center">
        <Logo />
      </div>
      <div className="h-[22%] space-y-4">
        <KakaoLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
}
