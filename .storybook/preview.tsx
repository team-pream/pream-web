import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#262626' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <div style={{ width: '100vh', maxWidth: '480px', margin: '0 auto' }}>
            <Story />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
};

export default preview;
