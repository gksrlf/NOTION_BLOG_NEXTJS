import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

console.log('process.env.NODE_ENV : ', process.env.NODE_ENV);

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   typedRoutes: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
};

// Turbopack에서는 MDX 로더 옵션이 직렬화 가능한 순수 객체여야 하므로
// 전역 MDX 플러그인 설정은 제거하고, 각 컴포넌트/페이지에서 개별적으로 설정합니다.
const withMDX = createMDX({});

export default withMDX(nextConfig);
