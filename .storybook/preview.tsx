import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/global-style';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#EAEEF2' },
        { name: 'dark', value: '#262626' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{ width: '100vh', maxWidth: '480px', margin: '0 auto' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
