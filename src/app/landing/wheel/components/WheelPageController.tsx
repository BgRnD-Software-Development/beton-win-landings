'use client';
import { ReactNode, useState } from 'react';
import { AttemptsCount, LogoAndRegisterButton, PromoText } from '../../components';
import FortuneWheel from './FortuneWheel';
import FullScreenModal from '../../components/ModalResult/FullScreenModal';
import SpinResultNoBonus from '../../components/ModalResult/SpinResultNoBonus';
import SpinResultWin from '../../components/ModalResult/SpinResultWin';

const SPIN_COUNT_TO_WIN = 2;

/**
 * Logic for the "Fortune Wheel" page
 * @controller WheelPage
 */
const WheelPageController = () => {
  const [spinsToGo, setSpinsToGo] = useState(SPIN_COUNT_TO_WIN);
  const [modal, setModal] = useState<ReactNode>(undefined);

  const wheelSize = 480; // TODO: Calculate size based on screen width

  const onSpinEnd = (isWinner: boolean, remainingSpins: number) => {
    if (!isWinner) {
      setSpinsToGo(Math.max(remainingSpins, 1));
      setModal(
        <FullScreenModal open={true} onClose={() => setModal(undefined)}>
          <SpinResultNoBonus />
        </FullScreenModal>
      );
      return; // That's all for loosing spin
    }

    // Winner case
    setSpinsToGo(0);
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '20rem', justifyContent: 'space-around' }}>
          <PromoText />
          <AttemptsCount count={spinsToGo} />
        </div>
        <div style={{ flexGrow: 1, minHeight: '50rem', border: '1px dotted #f0f' }}>
          <FortuneWheel size={wheelSize} spinsToWin={2} onSpinEnd={onSpinEnd} />
        </div>
      </div>
    </>
  );
};

export default WheelPageController;
