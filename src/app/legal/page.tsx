import { APP_NAME, EXTERNAL_LINK_PRIVACY_POLICY, EXTERNAL_LINK_TERMS_CONDITIONS, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
/**
 * List of legal documents of the site
 * @page Legal
 */
const LegalPage = () => {
  return (
    <Wrapper htmlTag="article">
      <Typo htmlTag="h1" size="large">
        Legal Documents
      </Typo>
      <Typo htmlTag="ul">
        <li>
          <Link href={EXTERNAL_LINK_PRIVACY_POLICY}>Privacy Policy</Link>
        </li>
        <li>
          <Link href={EXTERNAL_LINK_TERMS_CONDITIONS}>Terms and Conditions</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Legal Documents - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/legal/`,
  },
};

export default LegalPage;
