import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storycap',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    const { config: userConfig } = (await loadConfigFromFile({ command: 'build', mode: '' }, path.resolve(__dirname, '../vite.config.ts')))!;
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  }
};
export default config;
