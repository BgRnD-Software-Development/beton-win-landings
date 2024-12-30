import { Button, Logo, Stack, Typo, Wrapper } from '@/components';
import { AttemptsCount } from '../components';
import styles from './wheel.module.css';

/**
 * Landing page "Fortune Wheel"
 * @page WheelLanding
 * @url /landing/wheel/
 */
const WheelLandingPage = () => {
  return (
    <Wrapper className={styles.wrapper} htmlTag="article" fullHeight fullWidth>
      <Stack direction="row" justifyContent="space-between">
        <Logo variant="horizontal" width={180} />
        <Button>REGÍSTRATE</Button>
      </Stack>
      <Stack>
        <Stack direction="row" alignItems="center" gap="1rem">
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
      <AttemptsCount count={3} />
    </Wrapper>
  );
};

export default WheelLandingPage;
