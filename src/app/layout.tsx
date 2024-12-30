import { FunctionComponent, PropsWithChildren } from 'react';
import { Advertising, Analytics, Footer, StylesInjector } from '../components';
import { FONTS } from '@/style';
import './main.css';

/**
 * Root layout, renders only the <html> tag!
 * @layout Root
 */
const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <StylesInjector />
        <Analytics />
        <Advertising />
      </head>
      <body className={FONTS.default.className}>
        {/* <Header /> */}
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
