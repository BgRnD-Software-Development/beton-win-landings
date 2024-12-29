import { Stack, Typo, Wrapper } from '@/components';

const NotFoundPage = () => {
  return (
    <body>
      <Wrapper htmlTag="article" fullHeight>
        <Stack alignItems="center" fullHeight>
          <Typo htmlTag="h1" size="large">
            404
          </Typo>
          <Typo size="small">This page could not be found</Typo>
        </Stack>
      </Wrapper>
    </body>
  );
};

export default NotFoundPage;
