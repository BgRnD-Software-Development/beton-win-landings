'use client';
import { ReactNode, useState } from 'react';
import { useIsMobile } from '@/hooks';
import { FullScreenModal, LogoAndRegisterButton, SpinResultNoBonus, SpinResultWin } from '../../../components';
import DesktopComposition from './DesktopComposition';
import MobileComposition from './MobileComposition';

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

  return (
    <>
      {
        modal // Show modal if needed
      }
      <LogoAndRegisterButton />
      {isMobile ? (
        <MobileComposition remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
      ) : (
        <DesktopComposition remainingSpins={remainingSpins} onSpinEnd={onSpinEnd} />
      )}
    </>
  );
};

export default WheelPageController;
