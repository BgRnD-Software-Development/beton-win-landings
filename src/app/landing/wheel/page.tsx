import { Wrapper } from '@/components';
import { AttemptsCount, LogoAndRegisterButton, PromoText } from '../components';
import { FortuneWheel } from './components';
import styles from './wheel.module.css';

/**
 * Landing page "Fortune Wheel"
 * @page WheelLanding
 * @url /landing/wheel/
 */
const WheelLandingPage = () => {
  const wheelSize = 640;

  return (
    <Wrapper className={styles.wrapper} htmlTag="article" fullHeight fullWidth>
      <LogoAndRegisterButton />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '20rem', justifyContent: 'space-around' }}>
          <PromoText />
          <AttemptsCount count={3} />
        </div>
        <div style={{ flexGrow: 1, minHeight: '50rem', border: '1px dotted #f0f' }}>
          <FortuneWheel size={480} />
        </div>
      </div>
    </Wrapper>
  );
};

export default WheelLandingPage;
