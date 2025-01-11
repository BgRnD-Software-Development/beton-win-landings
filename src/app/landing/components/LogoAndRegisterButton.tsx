'use client';
import { Button, Logo, Stack } from '@/components';
import { useIsMobile } from '@/hooks';
import { disableBackNavigation, onRegisterButtonClick } from '@/utils/navigation';
import { useEffect } from 'react';

const LogoAndRegisterButton = () => {
  const isMobile = useIsMobile();

  const justifyContent = isMobile ? 'center' : 'space-between';
  const padding = isMobile ? '1rem 0' : '2rem 0';

  // Disable any back navigation from Landing pages
  useEffect(() => {
    disableBackNavigation();
  }, []);

  return (
    <Stack alignItems="center" direction="row" gap="0.5rem" justifyContent={justifyContent} padding={padding}>
      <Logo variant="horizontal" width={180} />
      <Button onClick={onRegisterButtonClick}>REGÍSTRATE</Button>
    </Stack>
  );
};

export default LogoAndRegisterButton;
