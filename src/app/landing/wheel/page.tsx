import { Wrapper } from '@/components';
import { WheelPageController } from './components';
import styles from './wheel.module.css';

/**
 * Landing page "Fortune Wheel"
 * @page WheelLanding
 * @url /landing/wheel/
 */
const WheelLandingPage = () => {
  return (
    <Wrapper className={styles.wrapper} htmlTag="article" fullHeight fullWidth>
      <WheelPageController />
    </Wrapper>
  );
};

export default WheelLandingPage;
