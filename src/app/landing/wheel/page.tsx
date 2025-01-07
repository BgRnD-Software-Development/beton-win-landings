import { APP_NAME, PUBLIC_URL } from '@/config';
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

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Fortune Wheel - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/landing/wheel/`,
  },
};

export default WheelLandingPage;
