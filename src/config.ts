import { getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.
// export const IS_PRODUCTION =  process.env.NEXT_PUBLIC_ENV === 'production'; // Enables analytics, etc.

// export const PUBLIC_URL = envRequired(process.env.NEXT_PUBLIC_PUBLIC_URL); // Variant 1 - value is required
export const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL ?? 'http://localhost:3000'; // Variant 2 - value is optional

export const APP_NAME = 'Beton.win';
export const APP_SHORT_NAME = 'BetOnWin';

export const EXTERNAL_LINK_BETONWIN = 'https://beton.win';
export const EXTERNAL_LINK_PRIVACY_POLICY = 'https://beton.win/legal/privacy-policy/';
export const EXTERNAL_LINK_TERMS_CONDITIONS = 'https://beton.win/legal/terms-conditions/';
export const EXTERNAL_LINK_EMAIL = 'mailto:servicio-al-cliente@beton.win';
