import { cache, FunctionComponent, HTMLAttributes, JSX, PropsWithChildren, ReactNode } from 'react';
import { FONTS } from '@/style';
import HtmlTag from '../HtmlTag';
import styles from './Typo.module.css';

export type TypoAlign = 'center' | 'left' | 'right' | 'justify';
export type TypoColor = 'white' | 'yellow' | 'dark';
export type TypoFont = 'prompt' | 'ibm';
export type TypoSize = 'small' | 'medium' | 'large';

export interface TypoProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  align?: TypoAlign;
  bold?: boolean;
  capitalize?: boolean;
  className?: string;
  children: ReactNode;
  color?: TypoColor | string;
  font?: TypoFont;
  htmlTag?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
  size?: TypoSize | string;
  underline?: boolean;
  uppercase?: boolean;
}

/**
 * Renders text content with given variant
 * @component Typo
 * @param {TypoAlign} [align] - way to align text, defaults to 'left'
 * @param {boolean} [bold] - whether to render bold text or not
 * @param {boolean} [capitalize] - whether to render capitalize text or not
 * @param {TypoColor} [color] - color to render, defaults to 'dark'
 * @param {TypoFont} [font] - font to render, defaults to 'prompt'
 * @param {string} [htmlTag] - HTML tag to render, defaults to 'span'
 * @param {boolean} [noWrap] - whether to render noWrap text or not
 * @param {TypoSize} [size] - size of the text, defaults to 'medium'
 * @param {boolean} [underline] - whether to render underline text or not
 * @param {boolean} [uppercase] - whether to render uppercase text or not
 */
const Typo: FunctionComponent<TypoProps> = ({
  align = 'left',
  bold,
  capitalize,
  children,
  className,
  color = 'white',
  font = 'prompt',
  noWrap,
  size = 'medium',
  style,
  htmlTag = 'span',
  underline,
  uppercase,
  ...restOfProps
}) => {
  const classToRender = cache(() =>
    [
      styles.typo, // Base class
      FONTS?.[font]?.className,
      styles[color],
      styles[size],
      styles[align],
      bold && styles.bold,
      capitalize && styles.capitalize,
      noWrap && styles.noWrap,
      underline && styles.underline,
      uppercase && styles.uppercase,
      className, // Custom class must be the last one
    ]
      .filter(Boolean)
      .join(' ')
  );

  const styleToRender = cache(() => ({
    ...(!styles?.[color] && { color: color }), // if exact color is not defined in CSS, pass the color as a string
    ...(!styles?.[size] && { fontSize: size }), // if exact size is not defined in CSS, pass the size as fontSize
    ...style,
  }));

  return (
    <HtmlTag className={classToRender()} style={styleToRender()} tag={htmlTag} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Typo;
