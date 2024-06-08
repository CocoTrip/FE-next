import { Button } from '@/shared';
import { SiNaver } from 'react-icons/si';

export default function NaverLoginButton() {
  return (
    <Button type="naver" icon={<SiNaver />}>
      네이버 로그인
    </Button>
  );
}
