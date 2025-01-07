import React, { FunctionComponent } from 'react';
import { AttemptsCount, PromoText } from '../../../components';
import { WheelCompositionProps } from './utils';
import FortuneWheel from '../FortuneWheel';
import styles from './WheelPageController.module.css';

const MobileComposition: FunctionComponent<WheelCompositionProps> = ({ remainingSpins, onSpinEnd }) => {
  return (
    <div className={styles.mobile}>
      <div className={styles.promo}>
        <PromoText />
      </div>
      <div className={styles.wheel}>
        <FortuneWheel remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
        <AttemptsCount className={styles.attempts} count={remainingSpins} variant="white" />
      </div>
    </div>
  );
};

export default MobileComposition;
