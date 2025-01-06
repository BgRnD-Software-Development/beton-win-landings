'use client';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import SpinButton from '../SpinButton';
import styles from './FortuneWheel.module.css';

const SPIN_DURATION_IN_SECONDS = 5;

interface Props {
  remainingSpins: number;
  onSpinEnd: (remainingSpinsAfter: number) => void;
}

/**
 * Renders a "Fortune Wheel" and allows to spin it.
 * @component FortuneWheel
 * @param {number} spinNumber - number of next spin (0 means winning spin)
 * @param {function} [onSpinEnd] - callback to call when spinning ends
 */
const FortuneWheel: FunctionComponent<Props> = ({ remainingSpins, onSpinEnd }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  const isWinner = remainingSpins <= 0;

  const wheelClassName = [
    styles.wheel,
    isWinner && styles.isWinner, // When amount of spins is enough, the "winning sector" is on top
    isSpinning &&
      (isWinner
        ? styles.spinWinner // Animation will end on the "winning sector"
        : styles.spinNoBonus), // Animation will end on the "losing sector"
  ]
    .filter(Boolean)
    .join(' ');

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  // Start spinning animation
  const onButtonClick = () => {
    if (timeoutId.current) {
      return; // Already spinning, ignore
    }
    // Start spinning
    setIsSpinning(true);
    // Create a timeout to stop spinning
    timeoutId.current = setTimeout(() => {
      // Note: the CSS animation-duration should be less then SPIN_DURATION_IN_SECONDS value
      setIsSpinning(false);
      onSpinEnd?.(
        remainingSpins - 1 // Decrease remaining spins
      );
      timeoutId.current = undefined;
    }, SPIN_DURATION_IN_SECONDS * 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={wheelClassName} />
      <div className={styles.marker} />
      {!isSpinning && <SpinButton onClick={onButtonClick} />}
    </div>
  );
};

export default FortuneWheel;
