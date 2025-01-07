import { Stack, Typo, Wrapper } from '@/components';

const NotFoundPage = () => {
  return (
    <Wrapper htmlTag="article" fullHeight>
      <Stack alignItems="center" fullHeight justifyContent="center">
        <Typo color="yellow" htmlTag="h1" size="large">
          404
        </Typo>
        <Typo htmlTag="p" size="small">
          This page could not be found
        </Typo>
      </Stack>
    </Wrapper>
  );
};

export default NotFoundPage;
