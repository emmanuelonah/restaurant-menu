import React from 'react';

import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme, GlobalStyles } from 'design-system';

export * from '@testing-library/react';

/**
 * @Wrapper provides to the children the Style-Theme QueryClient for react-query-lib
 */
function Wrapper(props: { children: React.ReactElement }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <QueryClientProvider client={new QueryClient()}>{props.children}</QueryClientProvider>
    </ThemeProvider>
  );
}

/**
 * @renderWithOptions use this function when you want your test
 * component to access our design system
 * @param {children:React.ReactNode}
 * @returns a transpiled reactNode object
 */
export function renderWithOptions(ui: React.ReactElement, opts?: RenderOptions) {
  return render(ui, {
    wrapper: Wrapper as React.JSXElementConstructor<{ children: React.ReactElement }>,
    ...opts,
  });
}