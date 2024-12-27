'use client';
import { FunctionComponent, PropsWithChildren } from 'react';
import { useIsMobile } from '@/hooks';

/**
 * Tooling component to render children only on desktop devices
 * @component DesktopOnly
 */
const DesktopOnly: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null; // Do not render children on mobile devices
  }

  return children; // Render children on desktop devices
};

export default DesktopOnly;
