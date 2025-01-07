'use client';
import { Button, Logo, Stack } from '@/components';
import { useIsMobile } from '@/hooks';

const LogoAndRegisterButton = () => {
  const isMobile = useIsMobile();

  const justifyContent = isMobile ? 'center' : 'space-between';
  const padding = isMobile ? '1rem 0' : '2rem 0';

  const onRegisterButtonClick = () => {
    alert('Register button clicked');
  };

  return (
    <Stack alignItems="center" direction="row" gap="0.5rem" justifyContent={justifyContent} padding={padding}>
      <Logo variant="horizontal" width={180} />
      <Button onClick={onRegisterButtonClick}>REGÍSTRATE</Button>
    </Stack>
  );
};

export default LogoAndRegisterButton;
