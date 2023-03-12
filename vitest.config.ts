import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        alias: {
            '@test-utils': './src/test/test-utils.tsx'
        },
        coverage: {
            enabled: false,
            reportsDirectory: './coverage',
        },
        environment: 'jsdom',
        globals: true,
        include: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
        setupFiles: './src/test/setup.ts',
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    }
}));
