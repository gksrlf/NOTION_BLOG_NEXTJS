import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

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

const withMDX = createMDX({
  // 필요한 마크다운 플러그인을 추가할 수 있음
  options: {
    // ts-expect-error remark-gfm
    recmaPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
