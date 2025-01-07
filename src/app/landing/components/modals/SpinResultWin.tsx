import { Button, Stack, Typo } from '@/components';

/**
 * Renders content of "Winning Spin Result"
 * @component SpinResultWin
 */
const SpinResultWin = () => {
  const onButtonClick = () => {
    // TODO: Implement redirect to the "Deposit" page
    alert('Redirect to the "Deposit" page');
  };

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
      <Button onClick={onButtonClick}>obtener mis premios</Button>
    </Stack>
  );
};

export default SpinResultWin;
