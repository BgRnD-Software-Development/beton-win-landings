import { Button, Stack, Typo } from '@/components';

/**
 * Renders content of "Loosing Spin Result"
 * @component SpinResultNoBonus
 */
const SpinResultNoBonus = () => {
  return (
    <Stack alignItems="center">
      <Typo color="white" size="medium">
        Lo sentimos, pero ha perdido
      </Typo>
      <Typo color="yellow" size="small">
        No se preocupe, intente nuevamente
      </Typo>
      <Button
        onClick={
          undefined // Button is fake, so no action is needed
        }
      >
        Girar de Nuevo
      </Button>
    </Stack>
  );
};

export default SpinResultNoBonus;
