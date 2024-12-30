'use client';
import { FunctionComponent } from 'react';
import { Stack, Typo } from '@/components';
import { useIsMobile } from '@/hooks';
import WhitePlateSvg from './WhitePlateSvg';
import styles from './AttemptsCount.module.css';

type Variant = 'color' | 'white';

interface Props {
  count: number;
}

/**
 * Represents the number of attempts the user has left.
 * On mobile, the component is displayed in a "white plate".
 * On desktop, the component is displayed in a colored inline text.
 * @component AttemptsCount
 * @param {number} count - The number of attempts left
 */
const AttemptsCount: FunctionComponent<Props> = ({ count }) => {
  const isMobile = useIsMobile();

  const variant: Variant = isMobile ? 'white' : 'color';

  const countSize = isMobile ? '2.5rem' : '6rem';
  const countColor = variant === 'color' ? 'yellow' : 'dark';

  const labelSize = isMobile ? 'small' : 'medium';
  const labelColor = variant === 'color' ? 'white' : 'dark';

  const gap = isMobile ? '0.5rem' : '1rem';

  const textStyle = {
    zIndex: variant === 'white' ? 1 : undefined,
  };

  return (
    <div className={styles.container}>
      {variant === 'white' && <WhitePlateSvg className={styles.background} />}
      <Stack direction="row" alignItems="center" gap={gap}>
        <Typo align="right" color={labelColor} size={labelSize} style={textStyle}>
          TIENES
          <br />
          INTENTOS
        </Typo>
        <Typo color={countColor} size={countSize} style={textStyle}>
          {count}
        </Typo>
      </Stack>
    </div>
  );
};

export default AttemptsCount;
