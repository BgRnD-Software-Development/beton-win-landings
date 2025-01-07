import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return (
    <Wrapper htmlTag="article" fullHeight>
      <Typo htmlTag="h1" size="large">
        Home page
      </Typo>
      <Typo color="yellow" htmlTag="h2" size="medium">
        What should we put here?
      </Typo>
      <Typo htmlTag="ul" size="small">
        <li>
          <Link href="/landing">Landing Pages</Link>
        </li>
        <li>
          <Link href="/contact">Contact Form</Link>
        </li>
        <li>
          <Link href="/404">404 - Not Found Page</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `TODO: Something cool here - ${APP_NAME}`,
  alternates: {
    canonical: PUBLIC_URL,
  },
};

export default HomePage;
