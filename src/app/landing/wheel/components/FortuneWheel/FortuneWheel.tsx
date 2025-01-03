'use client';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
// import svgWheelFrame from './wheel-frame.svg';
import svgWheelContent from './wheel-content.svg';
import { Button } from '@/components';
import styles from './FortuneWheel.module.css';

const SPIN_COUNT_TO_WIN = 2;
const SPIN_DURATION_IN_SECONDS = 5;

interface Props {
  size: number;
  onSpinEnd?: (isWinner: boolean) => void;
}

const FortuneWheel: FunctionComponent<Props> = ({ size = 640, onSpinEnd }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCounter, setSpinCounter] = useState(0);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  const contentOffset = size * 0.1;
  const frameWidth = size + 2 * contentOffset;
  const frameHeight = size + 2 * contentOffset + 123;

  const isWinner = spinCounter >= SPIN_COUNT_TO_WIN;

  const wheelClass = [
    styles.wheel,
    isWinner && styles.isWinner,
    isSpinning && (isWinner ? styles.spinWinner : styles.spinNoBonus),
  ]
    .filter(Boolean)
    .join(' ');

  // Cleanup timeout on unmount
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
      onSpinEnd?.(spinNumberWhenButtonCLicked >= SPIN_COUNT_TO_WIN);
      timeoutId.current = undefined;
    }, SPIN_DURATION_IN_SECONDS * 1000);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        border: '1px #ff0 dotted',
        // backgroundImage: `url(${svgWheelFrame.src})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center top',
        // backgroundSize: `${size + 512}px ${size + 64}px`,
        // backgroundSize: `${size + 512}px ${size + 64}px`,
        width: frameWidth,
        height: frameHeight,
        paddingTop: contentOffset,
        paddingLeft: contentOffset,
        paddingRight: contentOffset,
      }}
    >
      <div
        className={wheelClass}
        style={{
          backgroundImage: `url(${svgWheelContent.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          width: size,
          height: size,
          border: '1px #f00 dotted',
        }}
      />
      {!isSpinning && (
        <Button className={styles.button} size="large" variant="round" onClick={onButtonClick}>
          Girar
        </Button>
      )}
    </div>
  );
};

export default FortuneWheel;
