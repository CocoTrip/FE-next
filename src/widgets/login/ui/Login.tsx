import { Logo } from '@/shared';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';

export default function Login() {
  return (
    <div className="h-dvh">
      <div className="flex h-[75%] items-center justify-center">
        <Logo />
      </div>
      <div className="h-[25%] space-y-4">
        <KakaoLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
}
