import { Logo, Stack } from '@/components';

const LogoDemo = () => {
  return (
    <>
      <h2>Logotype</h2>
      <Stack padding="2rem" style={{ backgroundColor: '#888' }}>
        <Stack alignItems="center" direction="row">
          <Logo variant="horizontal" />
          <Logo variant="horizontal" hasBackground />
          <Logo href="/" variant="horizontal" width={96} />
          <Logo href="/" variant="horizontal" hasBackground width={96} />
        </Stack>

        <Stack alignItems="center" direction="row">
          <Logo variant="square" />
          <Logo variant="square" hasBackground />
          <Logo href="/" variant="square" width={64} />
          <Logo href="/" variant="square" hasBackground width={64} />
        </Stack>
      </Stack>
    </>
  );
};

export default LogoDemo;
