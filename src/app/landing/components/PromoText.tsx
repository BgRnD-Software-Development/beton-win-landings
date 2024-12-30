import { Stack, Typo } from '@/components';

const PromoText = () => {
  return (
    <Stack alignItems="center" gap="0.5rem">
      <Stack alignItems="center" direction="row" gap="0.5rem">
        <Typo color="yellow" size="large">
          GIRA
        </Typo>
        <Typo color="white" size="medium">
          LA RULETA
        </Typo>
        <Typo color="yellow" size="large">
          Y GANA
        </Typo>
      </Stack>
      <Typo color="white" size="small">
        UN PREMIO ESPECIAL
      </Typo>
    </Stack>
  );
};

export default PromoText;
