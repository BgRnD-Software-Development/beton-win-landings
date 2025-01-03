'use client';
import { useState } from 'react';
import { Button, Stack } from '@/components';
import FullScreenModal from '../landing/components/ModalResult/FullScreenModal';
import SpinResultNoBonus from '../landing/components/ModalResult/SpinResultNoBonus';
import SpinResultWin from '../landing/components/ModalResult/SpinResultWin';

const ModalDemo = () => {
  const [isNoBonusModalOpen, setIsNoBonusModalOpen] = useState(false);
  const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false);

  return (
    <>
      <h2>Modals</h2>
      <Stack alignItems="center" direction="row">
        <Button onClick={() => setIsNoBonusModalOpen(true)}>No Bonus</Button>
        <FullScreenModal
          open={isNoBonusModalOpen}
          onClose={(reason) => {
            console.log(`Close "SpinResultNoBonus" Modal: ${reason}`);
            setIsNoBonusModalOpen(false);
          }}
        >
          <SpinResultNoBonus />
        </FullScreenModal>

        <Button onClick={() => setIsWinnerModalOpen(true)}>Winner</Button>
        <FullScreenModal
          open={isWinnerModalOpen}
          ignoreBodyClick
          hideCloseButton
          onClose={(reason) => {
            console.log(`Close "Winner" Modal: ${reason}`);
            setIsWinnerModalOpen(false);
          }}
        >
          <SpinResultWin />
        </FullScreenModal>
      </Stack>
    </>
  );
};

export default ModalDemo;
