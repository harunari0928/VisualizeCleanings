import { afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';

afterEach(() => {
  cleanup()
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: (({ children }) => children) as unknown as React.ComponentType<{}>,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render }
