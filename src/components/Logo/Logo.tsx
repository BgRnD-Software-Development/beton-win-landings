import { FunctionComponent, HTMLAttributes } from 'react';
import Link from '../common/Link';
import LogotypeHorizontalClearImage from './components/HorizontalClearImage';
import LogotypeSquareClearImage from './components/SquareClearImage';
import LogotypeHorizontalRoundedImage from './components/HorizontalRoundedImage';
import LogotypeSquareRoundedImage from './components/SquareRoundedImage';
import styles from './Logo.module.css';

interface Props extends HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  href?: string;
  variant: 'horizontal' | 'square';
  width?: number | string;
  hasBackground?: boolean;
}

/**
 * Renders the Logo in desired size, effect and so on
 * @component Logo
 * @param {string} [className] - optional class name to add to the logo
 * @param {string} [href] - optional link to navigate to when clicking on the logo
 * @param {string} [variant] - variant of the logo,  defaults to 'horizontal'
 * @param {number | string} [width] - width of the logo
 * @param {boolean} [hasBackground] - whether the logo should have rounded background
 */
const Logo: FunctionComponent<Props> = ({
  className: customClassName,
  href,
  hasBackground = false,
  variant = 'horizontal',
  width,
  ...restOfProps
}) => {
  const LogoToRender = hasBackground
    ? variant === 'horizontal'
      ? LogotypeHorizontalRoundedImage
      : LogotypeSquareRoundedImage
    : variant === 'horizontal'
      ? LogotypeHorizontalClearImage
      : LogotypeSquareClearImage;

  const contentToRender = (
    <LogoToRender
      height={undefined /* This resets hardcoded height in SVG */}
      width={width ?? 128 /* Default width must be applied */}
    />
  );

  const className = [styles.logo, hasBackground && styles.hasBackground, customClassName].filter(Boolean).join(' ');

  if (href) {
    // Render logo as a Link
    return (
      <Link className={className} href={href} {...restOfProps}>
        {contentToRender}
      </Link>
    );
  }

  // Render logo as a Div
  return (
    <div className={className} {...restOfProps}>
      {contentToRender}
    </div>
  );
};

export default Logo;
