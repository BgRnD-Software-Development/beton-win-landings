import { APP_NAME, EXTERNAL_LINK_PRIVACY_POLICY, EXTERNAL_LINK_TERMS_CONDITIONS, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of the "Sitemap" page. This is page is not `sitemap.xml`, but a page for humans.
 * @page Sitemap
 */
const SitemapPage = async () => {
  return (
    <Wrapper htmlTag="article">
      <Typo variant="header1">Sitemap</Typo>
      <Typo variant="list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/legal/">Legal</Link>
          <Typo variant="list">
            <li>
              <Link href={EXTERNAL_LINK_TERMS_CONDITIONS}>Terms and Conditions</Link>
            </li>
            <li>
              <Link href={EXTERNAL_LINK_PRIVACY_POLICY}>Privacy Policy</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/sitemap/">Sitemap</Link>
        </li>
        <li>
          <Link href="/contact/">Contact</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Sitemap - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/sitemap/`,
  },
};

export default SitemapPage;
