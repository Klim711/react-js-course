import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary component', () => {
  let renderedValue;

  it('renders children if no errors', () => {
    renderedValue = renderer.create(
      <ErrorBoundary>
        mockCildren
      </ErrorBoundary>,
    ).toJSON();

    expect(renderedValue).toMatchSnapshot();
  });

  it('renders error message if error is happen', () => {
    const ErrorComponent = () => {
      throw new Error();
    };
    renderedValue = renderer.create(
      <ErrorBoundary>
        <ErrorComponent/>
      </ErrorBoundary>,
    ).toJSON();

    expect(renderedValue).toMatchSnapshot();
  });
});
