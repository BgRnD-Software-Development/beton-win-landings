import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import { randomText } from '@/utils/text';
import Wrapper, { WrapperProps } from './Wrapper';

/**
 * Composition of component(s) to test
 */
const ComponentToTest: FunctionComponent<WrapperProps> = (props) => {
  return <Wrapper {...props} />;
};

describe('<Wrapper/> component', () => {
  //   beforeEach(() => {});

  it('renders itself', () => {
    let text = 'sample text';
    let testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>{text}</ComponentToTest>);
    let div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    let container = screen.getByText(text);
    expect(container).toBeDefined();
    expect(container).toHaveTextContent(text);
  });

  it('supports .className property', () => {
    let testId = randomText(8);
    let className = 'someClassName';
    render(
      <ComponentToTest data-testid={testId} className={className}>
        div with specific class
      </ComponentToTest>
    );
    let div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).toHaveClass(className);
  });

  it('supports .fullWidth property', () => {
    let testId, div;

    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>property .fullWidth is not set (default)</ComponentToTest>);
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).not.toHaveClass('fullWidth');

    testId = randomText(8);
    render(
      <ComponentToTest data-testid={testId} fullWidth={true}>
        property .fullWidth is true
      </ComponentToTest>
    );
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).toHaveClass('fullWidth');

    testId = randomText(8);
    render(
      <ComponentToTest data-testid={testId} fullWidth={false}>
        property .fullWidth is false
      </ComponentToTest>
    );
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).not.toHaveClass('fullWidth');
  });

  it('supports .htmlTag property', () => {
    let element, testId;

    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>property .htmlTag is not set (default)</ComponentToTest>);
    element = screen.getByTestId(testId);
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('div');

    const tagsToVerify: WrapperProps['htmlTag'][] = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    for (const tag of tagsToVerify) {
      testId = randomText(8);
      render(
        <ComponentToTest data-testid={testId} htmlTag={tag}>
          property .tag is {tag}
        </ComponentToTest>
      );
      element = screen.getByTestId(testId);
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe(tag);
    }
  });

  it('supports .width property', () => {
    let testId, div;

    testId = randomText(8);
    render(<ComponentToTest data-testid={testId}>property .with is not set (default)</ComponentToTest>);
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).not.toHaveStyle({ width: expect.anything(), maxWidth: expect.anything() });

    testId = randomText(8);
    const withAsNumber = 123;
    render(
      <ComponentToTest data-testid={testId} width={withAsNumber}>
        Property .width is number
      </ComponentToTest>
    );
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).toHaveStyle({ width: `${withAsNumber}px`, maxWidth: `${withAsNumber}px` });

    testId = randomText(8);
    const withAsText = '123rem';
    render(
      <ComponentToTest data-testid={testId} width={withAsText}>
        Property .width is text
      </ComponentToTest>
    );
    div = screen.getByTestId(testId);
    expect(div).toBeDefined();
    expect(div).toHaveStyle({ width: withAsText, maxWidth: withAsText });
    // style = window.getComputedStyle(div);
    // expect(style.width).toBe(withAsText);
    // expect(style.maxWidth).toBe(withAsText);
  });
});
