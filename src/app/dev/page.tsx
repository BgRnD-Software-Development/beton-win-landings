'use client';
import { redirect } from 'next/navigation';
import { Wrapper } from '@/components';
import { IS_DEBUG } from '@/config';
import LogoDemo from './LogoDemo';
import ButtonDemo from './ButtonDemo';
import TypoDemo from './TypoDemo';
import ModalDemo from './ModalDemo';

/**
 * Renders a "DevTools" page that is only available in development mode (IS_DEBUG == true)
 * You can use this page to test and debug various components and styles
 * @page DevTools
 */
const DevToolsPage = () => {
  if (!IS_DEBUG) {
    redirect('/');
  }

  return (
    <Wrapper>
      <LogoDemo />
      <ButtonDemo />
      <TypoDemo />
      <ModalDemo />
    </Wrapper>
  );
};

export default DevToolsPage;
