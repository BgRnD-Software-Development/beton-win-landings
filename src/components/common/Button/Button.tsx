'use client';
import { FunctionComponent, PropsWithChildren, useCallback, useMemo, KeyboardEvent, ButtonHTMLAttributes } from 'react';
import Link from '../Link';
import styles from './Button.module.css';

export type ButtonVariant = 'purple';
export type ButtonSize = 'medium' | 'large';

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>> {
  activeClassName?: string;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

/**
 * Renders standard "Button"
 * @component Button
 * @param {string} [activeClassName] - optional class name to apply when button is a link and current page matches .href
 * @param {string} [href] - optional href, if provided, button will be rendered as <a> tag
 * @param {ButtonVariant} [variant] - variant of the button, defaults to "contained" via BUTTON_VARIANT config
 */
const Button: FunctionComponent<ButtonProps> = ({
  activeClassName,
  className,
  children,
  disabled,
  href,
  size = 'medium',
  variant = 'purple',
  onKeyDown,
  ...restOfProps
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (event.key === 'Spacebar' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
      }
      onKeyDown?.(event);
    },
    [onKeyDown]
  );

  const classToRender = useMemo(
    () => [styles.button, styles[size], styles[variant], className].filter(Boolean).join(' '),
    [className, variant]
  );

  const buttonContent = useMemo(() => {
    // if (!children) {
    //   return null; // Nothing to render
    // }

    // if (!['string', 'number', 'boolean'].includes(typeof children)) {
    //   return children; // No need to wrap children into some Typography
    // }

    return <div className={styles.buttonContent}>{children}</div>;
  }, [children, size]);

  // Render as <a> tag if .href is provided, but only if button is not disabled
  if (href && !disabled) {
    return (
      <Link
        activeClassName={activeClassName}
        className={classToRender}
        href={href}
        {...restOfProps}
        onKeyDown={handleKeyDown}
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as <button> tag
  return (
    <button className={classToRender} disabled={disabled} {...restOfProps} onKeyDown={handleKeyDown}>
      {buttonContent}
    </button>
  );
};

export default Button;
