'use client';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import SpinButtonAsButton from '../SpinButton';
import svgWheelFrame from './wheel-frame.svg';
import svgWheelContent from './wheel-content.svg';
import svgWheelMarker from './wheel-marker.svg';
import styles from './FortuneWheel.module.css';

const SPIN_DURATION_IN_SECONDS = 5;

interface Props {
  size: number;
  spinsToWin: number;
  onSpinEnd: (isWinner: boolean, remainingSpins: number) => void;
}

/**
 * Renders a "Fortune Wheel" and allows to spin it.
 * @component FortuneWheel
 * @param {number} [size] - size of the wheel, defaults to 640
 * @param {function} [onSpinEnd] - callback to call when spinning ends
 */
const FortuneWheel: FunctionComponent<Props> = ({ size = 640, spinsToWin = 3, onSpinEnd }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCounter, setSpinCounter] = useState(0);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  // TODO: Fix size calculation
  const contentOffset = 40;
  const frameWidth = size + 2 * contentOffset;
  const frameHeight = size + 2 * contentOffset + 128;

  const isWinner = spinCounter >= spinsToWin;

  const wheelClass = [
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
  // TODO: Do we need useCallback here?
  const onButtonClick = () => {
    if (timeoutId.current) {
      return; // Already spinning, ignore
    }

    // Start spinning
    const spinNumberWhenButtonCLicked = spinCounter + 1;
    setSpinCounter(spinNumberWhenButtonCLicked);
    setIsSpinning(true);

    // Create a timeout to stop spinning
    timeoutId.current = setTimeout(() => {
      // Note: the CSS animation-duration should be less then SPIN_DURATION_IN_SECONDS value
      setIsSpinning(false);
      onSpinEnd?.(spinNumberWhenButtonCLicked >= spinsToWin, spinsToWin - spinNumberWhenButtonCLicked);
      timeoutId.current = undefined;
    }, SPIN_DURATION_IN_SECONDS * 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={wheelClass} />
      <img className={styles.marker} src={svgWheelMarker.src} />
      {!isSpinning && <SpinButtonAsButton onClick={onButtonClick} />}
    </div>
  );
};

export default FortuneWheel;
