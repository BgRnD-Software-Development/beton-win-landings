import { Stack, Typo } from '@/components';

const TypoDemo = () => {
  return (
    <>
      <h2>Typo</h2>
      <Stack style={{ backgroundColor: '#888' }}>
        <Typo color="yellow" size="large">
          Large Typo Yellow
        </Typo>
        <Typo color="white" size="medium">
          Medium Typo White
        </Typo>
        <Typo color="dark" size="small">
          Small Typo Dark
        </Typo>

        <Typo color="yellow" font="ibm" size="80px">
          Font IBM Yellow Size 80px
        </Typo>
        <Typo color="white" font="ibm" uppercase>
          Font IBM White UpperCase
        </Typo>
        <Typo color="dark" font="ibm" size="2.5rem" underline>
          Font IBM Dark Size 2.5rem Underline
        </Typo>

        <Typo size="large" uppercase>
          lo sentimos, pero ha perdido
        </Typo>
        <Typo color="yellow" size="medium" uppercase>
          lo sentimos, pero ha perdido
        </Typo>
        <Typo size="small" uppercase>
          un premio especial
        </Typo>
      </Stack>
    </>
  );
};

export default TypoDemo;
