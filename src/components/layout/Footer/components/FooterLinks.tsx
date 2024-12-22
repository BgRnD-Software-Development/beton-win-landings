import {
  EXTERNAL_LINK_BETONWIN,
  EXTERNAL_LINK_EMAIL,
  EXTERNAL_LINK_PRIVACY_POLICY,
  EXTERNAL_LINK_TERMS_CONDITIONS,
} from '@/config';
import { DesktopOnly, DesktopOnlyStack, Link } from '../../../common';

const FooterLinks = () => {
  return (
    <DesktopOnlyStack direction="row" justifyContent="space-around" alignItems="center" gap="1rem">
      <DesktopOnly>
        <Link href={EXTERNAL_LINK_BETONWIN} target="_self">
          @BETONWIN
        </Link>
      </DesktopOnly>
      <Link href={EXTERNAL_LINK_EMAIL}>Contacto: servicio-al-cliente@beton.win</Link>
      <Link href="/contact/">Contacto</Link>
      <Link href={EXTERNAL_LINK_TERMS_CONDITIONS}>Juego Responsable</Link>
      <Link href={EXTERNAL_LINK_PRIVACY_POLICY}>Politica De Privacidad</Link>
    </DesktopOnlyStack>
  );
};

export default FooterLinks;
