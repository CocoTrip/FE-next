import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kakao: 'var(--kakao-bg)',
        naver: 'var(--naver-bg)',
      },
      screens: {
        mobile: { max: '374px' },
        tablet: { min: '375px', max: '1024px' },
        desktop: { min: '1025px' },
      },
      gridTemplateColumns: {
        // Mobile
        'mobile-4': 'repeat(4, minmax(0, 1fr))',

        // Tablet
        'tablet-8': 'repeat(8, minmax(0, 1fr))',

        // Desktop
        'desktop-12': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        mobile: '8px', // 8pt
        tablet: '16px', // 16pt
        desktop: '24px', // 24pt
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
