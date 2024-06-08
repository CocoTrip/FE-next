import { Logo } from '@/shared';
import KakaoLoginButton from './KakaoLoginButton';
import NaverLoginButton from './NaverLoginButton';

export default function Login() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div className="flex flex-col space-y-2">
        <KakaoLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
}
