import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    // resolve: {
    //     alias: {
    //         '@': resolve(__dirname, './src'),
    //     },
    // },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
