import { FunctionComponent } from 'react';
import { AttemptsCount, PromoText } from '../../../components';
import { WheelCompositionProps } from './utils';
import FortuneWheel from '../FortuneWheel';
import styles from './WheelPageController.module.css';

const DesktopComposition: FunctionComponent<WheelCompositionProps> = ({ remainingSpins, onSpinEnd }) => {
  return (
    <div className={styles.desktop}>
      <div className={styles.promo}>
        <PromoText />
        <AttemptsCount count={remainingSpins} />
      </div>
      <div className={styles.wheel}>
        <FortuneWheel remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
      </div>
    </div>
  );
};

export default DesktopComposition;
