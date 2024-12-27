import { Button, Stack } from '@/components';

const ButtonDemo = () => {
  return (
    <>
      <h2>Button</h2>
      <Stack alignItems="center" direction="row">
        <Button>Regístrate</Button>
        <Button disabled>Disabled</Button>
        <Button size="large">girar de nuevo</Button>
      </Stack>
      <Stack alignItems="center" direction="row">
        <Button variant="purple">Purple</Button>
        <Button variant="purple" disabled>
          Disabled
        </Button>
        <Button size="large" variant="purple">
          Large
        </Button>
      </Stack>
    </>
  );
};

export default ButtonDemo;
