'use client';
import { Button, Stack, Typo } from '@/components';
import { onRegisterButtonClick } from '@/utils/navigation';

/**
 * Renders content of "Winning Spin Result"
 * @component SpinResultWin
 */
const SpinResultWin = () => {
  return (
    <Stack alignItems="center">
      <Typo color="yellow" size="medium">
        !ENHORABUENA!
      </Typo>
      <Typo color="white" size="small">
        GANÓ:
      </Typo>
      <Typo color="yellow" size="large">
        700%
      </Typo>
      <Typo color="white" size="medium">
        PARA su primer
      </Typo>
      <Typo color="yellow" size="large">
        depósito
      </Typo>
      <Typo color="white" size="large">
        +600 GG
      </Typo>
      <Button onClick={onRegisterButtonClick}>obtener mis premios</Button>
    </Stack>
  );
};

export default SpinResultWin;
