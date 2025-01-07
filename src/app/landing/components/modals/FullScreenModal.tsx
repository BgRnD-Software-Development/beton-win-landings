'use client';
import { FunctionComponent, PropsWithChildren, use, useEffect, useState } from 'react';
import styles from './Modal.module.css';

interface Props extends PropsWithChildren {
  open?: boolean;
  hideCloseButton?: boolean;
  ignoreBodyClick?: boolean;
  onClose: (reason: string) => void;
}

/**
 * Renders a full-screen modal
 * @component FullScreenModal
 * @param {boolean} [open] - whether modal is opened
 * @param {function} onClose - callback to call when modal is closed
 */
const FullScreenModal: FunctionComponent<Props> = ({
  children,
  hideCloseButton = false,
  ignoreBodyClick = false,
  open = false,
  onClose,
}) => {
  const [isOpened, setIsOpened] = useState(open);

  // Update state when prop changes
  useEffect(() => {
    setIsOpened(open);
  }, [open]);

  // Close modal on body click
  const onBodyClick = () => {
    setIsOpened(false);
    onClose('bodyClick');
  };

  const onCloseButtonClick = () => {
    setIsOpened(false);
    onClose('xButton');
  };

  if (!isOpened) {
    return null; // Do not render anything if modal is closed
  }

  return (
    <div className={styles.modal} onClick={!ignoreBodyClick ? onBodyClick : undefined}>
      {children}
      {!hideCloseButton && <button className={styles.xButton} onClick={onCloseButtonClick} />}
    </div>
  );
};

export default FullScreenModal;
