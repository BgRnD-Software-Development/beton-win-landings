import { Stack } from '../../../common';

const FooterIcons = () => {
  /* eslint-disable @next/next/no-img-element */
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" gap="1rem">
      <img src="/img/logo/logo-web-pay.png" alt="Web Pay Logotype" />
      <img src="/img/logo/logo-visa.png" alt="Visa Logotype" />
      <img src="/img/logo/logo-master-card.png" alt="Master Card Logotype" />
      <img src="/img/logo/logo-mach.png" alt="MACH Logotype" />
      <img src="/img/logo/logo-18-plus.png" alt="18+ Logotype" />
    </Stack>
  );
};

export default FooterIcons;
