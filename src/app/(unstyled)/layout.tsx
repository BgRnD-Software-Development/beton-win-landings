import { FunctionComponent, PropsWithChildren } from 'react';
import Analytics from '@/components/tooling/Analytics';
import StylesInjector from '../../components/tooling/StylesInjector';
import './unstyled.css';

/**
 * Layout for (unstyled) pages, renders head and body tags
 * @layout Unstyled
 */
const UnstyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <StylesInjector />
        <Analytics />
      </head>
      <body>
        <div className="content">{children}</div>
      </body>
    </>
  );
};

export default UnstyledLayout;
