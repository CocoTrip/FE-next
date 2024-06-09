import { Button } from '@/shared';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function KakaoLoginButton() {
  return (
    <Button type="kakao" icon={<RiKakaoTalkFill />}>
      카카오 로그인
    </Button>
  );
}
