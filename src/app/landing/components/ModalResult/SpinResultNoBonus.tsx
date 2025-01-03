import { Button, Stack, Typo } from '@/components';

/**
 * Renders content of "Loosing Spin Result"
 * @component SpinResultNoBonus
 */
const SpinResultNoBonus = () => {
  const onButtonClick = () => {
    // TODO: Implement redirect to the "Deposit" page
    alert('Close the Modal');
  };

  return (
    <Stack alignItems="center">
      <Typo color="white" size="medium">
        Lo sentimos, pero ha perdido
      </Typo>
      <Typo color="yellow" size="small">
        No se preocupe, intente nuevamente
      </Typo>
      <Button onClick={onButtonClick}>Girar de Nuevo</Button>
    </Stack>
  );
};

export default SpinResultNoBonus;
