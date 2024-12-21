import type { Metadata } from 'next';
import { APP_NAME, PUBLIC_URL } from '@/config';

export const OPEN_GRAPH_DEFAULT: Metadata['openGraph'] = {
  url: PUBLIC_URL,

  // TODO: Put your texts here
  siteName: `${APP_NAME} Website`,
  title: APP_NAME,
  description: `TODO: OpenGraph description for ${APP_NAME}, put nice Promo here`,

  images: [
    {
      url: `${PUBLIC_URL}/img/social/wheel-1200x630.png`,
      width: 1200,
      height: 630,
    },
    // {
    //   url: `${PUBLIC_URL}/img/social/screenshot-400x600.png`,
    //   width: 400,
    //   height: 600,
    // },
  ],
};
