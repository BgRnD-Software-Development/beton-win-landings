import { Stack, Typo } from '@/components';

const PromoText = () => {
  return (
    <Stack alignItems="center" gap="1rem">
      <Stack alignItems="center" direction="row" gap="0.5rem">
        <Typo color="yellow" size="large" noWrap>
          GIRA
        </Typo>
        <Typo color="white" size="medium" noWrap>
          LA RULETA
        </Typo>
        <Typo color="yellow" size="large" noWrap>
          Y GANA
        </Typo>
      </Stack>
      <Typo color="white" size="small" noWrap>
        UN PREMIO ESPECIAL
      </Typo>
    </Stack>
  );
};

export default PromoText;
