import { Button, Logo, Stack, Typo, Wrapper } from '@/components';
import { AttemptsCount, LogoAndRegisterButton, PromoText } from '../components';
import styles from './wheel.module.css';

/**
 * Landing page "Fortune Wheel"
 * @page WheelLanding
 * @url /landing/wheel/
 */
const WheelLandingPage = () => {
  return (
    <Wrapper className={styles.wrapper} htmlTag="article" fullHeight fullWidth>
      <LogoAndRegisterButton />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '20rem', justifyContent: 'space-around' }}>
          <PromoText />
          <AttemptsCount count={3} />
        </div>
        <div style={{ flexGrow: 1, minHeight: '50rem', border: '1px dotted #f0f' }}>Fortune Wheel here...</div>
      </div>
    </Wrapper>
  );
};

export default WheelLandingPage;
