import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
        server: {
            host: true,
            port: 3000,
            strictPort: true
        },
        root: 'src',
    };
});
