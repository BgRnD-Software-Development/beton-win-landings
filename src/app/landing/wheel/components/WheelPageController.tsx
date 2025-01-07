'use client';
import { ReactNode, useState } from 'react';
import { useIsMobile } from '@/hooks';
import { Stack } from '../../../../components';
import { AttemptsCount, LogoAndRegisterButton, PromoText } from '../../components';
import FortuneWheel from './FortuneWheel';
import FullScreenModal from '../../components/ModalResult/FullScreenModal';
import SpinResultNoBonus from '../../components/ModalResult/SpinResultNoBonus';
import SpinResultWin from '../../components/ModalResult/SpinResultWin';
import styles from '../wheel.module.css';

const SPIN_COUNT_TO_WIN = 2;

/**
 * Logic for the "Fortune Wheel" page
 * @controller WheelPage
 */
const WheelPageController = () => {
  const isMobile = useIsMobile();
  const [remainingSpins, setRemainingSpins] = useState(SPIN_COUNT_TO_WIN);
  const [modal, setModal] = useState<ReactNode>(undefined);

  const onSpinEnd = (remainingSpins: number) => {
    const isWinner = remainingSpins <= 0;

    if (!isWinner) {
      // Looser case
      setRemainingSpins(Math.max(remainingSpins, 1));
      setModal(
        <FullScreenModal open={true} onClose={() => setModal(undefined)}>
          <SpinResultNoBonus />
        </FullScreenModal>
      );
      return; // That's all for loosing spin
    }

    // Winner case
    setRemainingSpins(0);
    setModal(
      <FullScreenModal open={true} ignoreBodyClick hideCloseButton onClose={() => setModal(undefined)}>
        <SpinResultWin />
      </FullScreenModal>
    );
  };

  const renderDesktop = () => {
    return (
      <Stack direction="row" gap="1rem" justifyContent="center">
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '20rem', justifyContent: 'space-around' }}>
          <PromoText />
          <AttemptsCount count={remainingSpins} />
        </div>
        <div
          style={{
            border: '1px dotted #f0f',
            flexGrow: 1,
            minHeight: '50rem',
          }}
        >
          <FortuneWheel remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
        </div>
      </Stack>
    );
  };

  const renderMobile = () => {
    return (
      <Stack gap="1rem">
        <PromoText />
        <div className={styles.wheelContainerMobile}>
          <FortuneWheel remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
          <AttemptsCount className={styles.attemptsCountMobile} count={remainingSpins} variant="white" />
        </div>
      </Stack>
    );
  };

  return (
    <>
      {
        modal // Show modal if needed
      }
      <LogoAndRegisterButton />
      {isMobile ? renderMobile() : renderDesktop()}
    </>
  );
};

export default WheelPageController;
