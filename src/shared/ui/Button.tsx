import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'kakao' | 'naver' | 'normal';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  icon,
  type = 'normal',
}) => {
  const buttonClass = clsx(
    'h-[54px] w-full px-4 py-2 rounded-md flex items-center justify-center focus:outline-none focus:ring-2',
    {
      'bg-[var(--kakao-bg)] hover:bg-yellow-400 text-black focus:ring-[var(--kakao-bg)]':
        type === 'kakao',
      'bg-[var(--naver-bg)] hover:bg-green-600 text-white focus:ring-green-300':
        type === 'naver',
      'bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-300':
        type === 'normal',
    },
    className,
  );
  return (
    <button onClick={onClick} className={`${buttonClass}`}>
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
