import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        alias: {
            '@test-utils': './test/test-utils.tsx',
            '@components/': './app/components/',
        },
        coverage: {
            enabled: false,
            reportsDirectory: './coverage',
        },
        environment: 'jsdom',
        globals: true,
        include: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+spec.+(ts|tsx|js)"],
        root: 'src',
        setupFiles: './test/setup.ts',
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    }
}));
