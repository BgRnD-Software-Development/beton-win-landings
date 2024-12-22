import { DesktopOnlyStack } from '../../common';
import FooterLinks from './components/FooterLinks';
import FooterIcons from './components/FooterIcons';
import FinePrint from './components/FinePrint';
import ImportantNote from './components/ImportantNote';
import styles from './Footer.module.css';

/**
 * Renders "Footer" composition.
 * @component Footer
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DesktopOnlyStack direction="row" gap="1rem">
        <FooterLinks />
        <FooterIcons />
      </DesktopOnlyStack>
      <ImportantNote />
      <FinePrint />
    </footer>
  );
};

export default Footer;
