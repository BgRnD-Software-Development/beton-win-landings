import { FunctionComponent, HTMLAttributes, JSX, PropsWithChildren } from 'react';
import HtmlTag from '../../common/HtmlTag';
import styles from './Wrapper.module.css';

export interface WrapperProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  fullHeight?: boolean;
  fullWidth?: boolean;
  htmlTag?: keyof JSX.IntrinsicElements;
  width?: number | string;
}

/**
 * Multifunctional "wrapper" component to make content restricted by width
 * @component Wrapper
 * @param {boolean} [fullHeight] - if true, wrapper will be 100vh height
 * @param {boolean} [fullWidth] - if true, wrapper will be 100% width
 * @param {string} [htmlTag] - HTML tag to render
 * @param {number} [width] - .width style override
 */
const Wrapper: FunctionComponent<WrapperProps> = ({
  className,
  children,
  fullHeight,
  fullWidth,
  htmlTag = 'div',
  style,
  width,
  ...restOfProps
}) => {
  const classToRender = [styles.wrapper, fullHeight && styles.fullHeight, fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

  const widthToRender = typeof width === 'number' ? `${width}px` : width;
  const styleToRender = { ...(width && { maxWidth: widthToRender, width: widthToRender }), ...style };

  return (
    <HtmlTag tag={htmlTag} className={classToRender} style={styleToRender} {...restOfProps}>
      {children}
    </HtmlTag>
  );
};

export default Wrapper;
