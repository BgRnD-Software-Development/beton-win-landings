import { render, screen } from '@testing-library/react';
import { randomText } from '@/utils/text';
import Button, { ButtonVariant } from './Button';

const ComponentToTest = Button;

/**
 * Tests for <Button/> component
 */
describe('<Button/> component', () => {
  it('renders itself', () => {
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} />);
    const button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button.tagName.toLowerCase()).toBe('button');
  });

  it('supports .className property', () => {
    let className = 'someClassName';
    const testId = randomText(8);
    render(
      <ComponentToTest data-testid={testId} className={className}>
        Button with className
      </ComponentToTest>
    );
    const button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button).toHaveClass(className);
  });

  it('supports .href property', () => {
    let testId, text, href, link;

    // Internal link
    testId = randomText(8);
    text = 'Button with "internal" .href property';
    href = '/relative-link';
    render(
      <ComponentToTest data-testid={testId} href={href}>
        {text}
      </ComponentToTest>
    );
    link = screen.getByTestId(testId);
    expect(link).toBeDefined();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', href);

    // External link
    testId = randomText(8);
    text = 'Button with "external" .href property';
    href = 'https://sample.com';
    render(
      <ComponentToTest data-testid={testId} href={href}>
        {text}
      </ComponentToTest>
    );
    link = screen.getByTestId(testId);
    expect(link).toBeDefined();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
  });

  it('supports .variant property', () => {
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>Default Variant</ComponentToTest>);
    const button = screen.getByTestId(testId);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('class', expect.stringContaining('purple'));

    const VARIANTS: ButtonVariant[] = ['purple'];
    // Verify that variants are supported
    for (const variant of VARIANTS) {
      const testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} variant={variant}>
          {variant}
        </ComponentToTest>
      );
      const button = screen.getByTestId(testId);
      expect(button).toBeDefined();
      expect(button).toHaveAttribute('class', expect.stringContaining(variant));
    }
  });
});
