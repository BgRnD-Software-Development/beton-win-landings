'use client';
import { FunctionComponent } from 'react';
import { useIsMobile } from '@/hooks';
import Stack, { StackProps } from '../Stack/Stack';

/**
 * Renders a "Stack with Children" on Desktop and just returns children on Mobile
 * @component DesktopOnlyStack
 */
const DesktopOnlyStack: FunctionComponent<StackProps> = ({ children, ...restOfProps }) => {
  const isMobile = useIsMobile();

  // Mobile render, don't wrap children in a row
  if (isMobile) {
    return children; // Just return the children as is
  }

  // Desktop render, wrap children in a Stack and pass all props
  return <Stack {...restOfProps}>{children}</Stack>;
};

export default DesktopOnlyStack;
