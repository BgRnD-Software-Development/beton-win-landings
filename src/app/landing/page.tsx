import { Link, Stack, Typo, Wrapper } from '@/components';

const ListOfLandingsPage = () => {
  return (
    <Wrapper htmlTag="article" fullHeight>
      <Stack gap="1rem" fullHeight justifyContent="center">
        <Typo htmlTag="h1" size="large">
          Landing Pages
        </Typo>
        <Typo color="yellow" htmlTag="h2" size="medium">
          We have several landing pages available for you to explore
        </Typo>
        <Typo htmlTag="ul" size="small">
          <li>
            <Link href="/landing/wheel/">Wheel</Link>
          </li>
          <li>
            <Link href="/landing/slots/">Slots</Link>
          </li>
          <li>
            <Link href="/landing/roulette/">Roulette</Link>
          </li>
        </Typo>
        <Typo size="small">Other landing pages will be added soon. Stay tuned!</Typo>
      </Stack>
    </Wrapper>
  );
};

export default ListOfLandingsPage;
