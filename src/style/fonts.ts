/**
 * Fonts using standard NextJS font management.
 */
import { IBM_Plex_Sans_Condensed, Prompt } from 'next/font/google';

// Font 1
const fontPrompt = Prompt({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-prompt', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  weight: ['600'],
});

// Font 2
const fontIbm = IBM_Plex_Sans_Condensed({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-ibm', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  weight: ['700'],
});

export const FONTS = {
  default: fontPrompt, // The default font is used for <body/>, so it should be set here
  prompt: fontPrompt,
  ibm: fontIbm,
};

export default FONTS;
