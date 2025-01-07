import { FunctionComponent } from 'react';
import { Typo } from '@/components';
import { AttemptsCountProps } from './utils';
import styles from './AttemptsCount.module.css';

/**
 * Represents the number of attempts the user has left.
 * @component AttemptsCount
 * @param {string} [className] - custom CSS class name
 * @param {number} count - the number of attempts left
 * @param {string} [variant] - the variant to render, either 'default' or 'white'
 */
const AttemptsCount: FunctionComponent<AttemptsCountProps> = ({
  className: customClassName,
  count,
  variant = 'default',
}) => {
  const className = [styles.container, styles?.[variant], customClassName].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <Typo className={styles.label}>
        TIENES
        <br />
        INTENTOS
      </Typo>
      <Typo className={styles.count}>{count}</Typo>
    </div>
  );
};

export default AttemptsCount;
