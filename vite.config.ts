import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
    return {
        build: {
            outDir: '../dist',
        },
        hmr: {
            host: '0.0.0.0',
            overlay: true,
            clientPort: 8081,
        },
        plugins: [
            react({
                include: '**/*.{jsx,tsx}',
            }),
        ],
        root: 'src',
        resolve: {
            alias: {
                '@components/': path.join(__dirname, 'src', 'app/components/'),
            },
        },
        server: {
            host: true,
            port: 3000,
            strictPort: true
        }
    };
});
