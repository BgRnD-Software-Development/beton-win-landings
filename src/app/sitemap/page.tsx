import { APP_NAME, EXTERNAL_LINK_PRIVACY_POLICY, EXTERNAL_LINK_TERMS_CONDITIONS, PUBLIC_URL } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';

/**
 * Content of the "Sitemap" page. This is page is not `sitemap.xml`, but a page for humans.
 * @page Sitemap
 */
const SitemapPage = async () => {
  return (
    <Wrapper htmlTag="article" fullHeight fullWidth>
      <Stack gap="1rem">
        <Typo htmlTag="h1" size="large">
          Sitemap
        </Typo>
        <Typo color="yellow" htmlTag="h2" size="medium">
          List of pages on this website
        </Typo>
        <Typo htmlTag="ul" size="small">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/landing/">Landing Pages</Link>
            <ul>
              <li>
                <Link href="/landing/wheel/">Fortune Wheel</Link>
              </li>
              <li>
                <Link href="/landing/slots/">Slots Machine</Link>
              </li>
              <li>
                <Link href="/landing/roulette/">Cassino Roulette</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/legal/">Legal</Link>
            <ul>
              <li>
                <Link href={EXTERNAL_LINK_TERMS_CONDITIONS}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={EXTERNAL_LINK_PRIVACY_POLICY}>Privacy Policy</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact/">Contact</Link>
          </li>

          <li>
            <Link href="/sitemap/">Sitemap</Link>
          </li>
        </Typo>
        <Typo size="small">Other pages are generated dynamically and may not be listed here.</Typo>
      </Stack>
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
