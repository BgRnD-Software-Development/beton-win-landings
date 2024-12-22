'use client';
import { FunctionComponent, PropsWithChildren } from 'react';
import { useIsMobile } from '@/hooks';

/**
 * Tooling component to render children only on mobile devices
 * @component MobileOnly
 */
const MobileOnly: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null; // Do not render children on desktop devices
  }

  return children; // Render children on mobile devices
};

export default MobileOnly;
