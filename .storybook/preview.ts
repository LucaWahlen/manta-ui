import type { Preview } from '@stencil/storybook-plugin';
import { withThemeByClassName } from '@storybook/addon-themes';

// Import global styles with design tokens
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'manta-dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
