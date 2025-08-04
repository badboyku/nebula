import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: { fsCache: true, lazyCompilation: true },
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // '@storybook/addon-interactions', // When update to 9, you don't need this
    // '@storybook/addon-mdx-gfm',
    // '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    // '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: { fsCache: true, lazyCompilation: true },
    },
    disableTelemetry: true,
  },
  // docs: {
  //   autodocs: 'tag',
  // },
  typescript: {
    check: true,
    // checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: { allowSyntheticDefaultImports: false, esModuleInterop: false },
      // Makes union prop @types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean @types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) => prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
    skipCompiler: false,
  },
};

export default config;
