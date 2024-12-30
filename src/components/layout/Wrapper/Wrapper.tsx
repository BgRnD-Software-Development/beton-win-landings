import { FunctionComponent, HTMLAttributes, JSX, PropsWithChildren } from 'react';
import HtmlTag from '../../common/HtmlTag';
import styles from './Wrapper.module.css';

export interface WrapperProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  fullHeight?: boolean;
  fullWidth?: boolean;
  htmlTag?: keyof JSX.IntrinsicElements;
  height?: number | string;
  width?: number | string;
}

/**
 * Multifunctional "wrapper" component to make content restricted by width
 * @component Wrapper
 * @param {boolean} [fullHeight] - if true, wrapper will be 100vh height
 * @param {boolean} [fullWidth] - if true, wrapper will be 100% width
 * @param {string} [htmlTag] - the HTML tag to render
 * @param {number | string} [height] - the height of HTML element will be NOT LESS than this value
 * @param {number | string} [width] - the width of HTML element wil be NOT MORE than this value
 */
const Wrapper: FunctionComponent<WrapperProps> = ({
  className,
  children,
  fullHeight,
  fullWidth,
  htmlTag = 'div',
  height,
  style,
  width,
  ...restOfProps
}) => {
  const classToRender = [styles.wrapper, fullHeight && styles.fullHeight, fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

  const widthToRender = typeof width === 'number' ? `${width}px` : width;
  const heightToRender = typeof height === 'number' ? `${height}px` : height;
  const styleToRender = {
    ...(height && { minHeight: heightToRender }),
    ...(width && { maxWidth: widthToRender, width: widthToRender }),
    ...style,
  };

  return (
    <HtmlTag tag={htmlTag} className={classToRender} style={styleToRender} {...restOfProps}>
      <div className={styles.content}>{children}</div>
    </HtmlTag>
  );
};

export default Wrapper;
