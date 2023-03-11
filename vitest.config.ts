import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
        include: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
            coverage: {
        enabled: true,
            reportsDirectory: './coverage',
        },
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    }
}));
