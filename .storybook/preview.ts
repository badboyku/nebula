import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import ThemeProvider from '../src/theme/ThemeProvider';
import ZegoTheme from '../src/theme/ZegoTheme';
import type { Preview } from '@storybook/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../src/assets/fonts/acumin.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/ },
    },
  },
  decorators: [
    withThemeFromJSXProvider({ themes: { zego: ZegoTheme }, defaultTheme: 'zego', Provider: ThemeProvider }),
  ]
};

export default preview;
