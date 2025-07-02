import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

/* Common Config for both PROD and DEV mode */
const commonConfig: UserConfig = {
    plugins: [react(), tsconfigPaths()],
    /* Customizing build folder structure */
    build: {
        /* 
        Imported or referenced assets that are smaller than 4KiB threshold will be inlined as base64 URLs to avoid extra http requests.
        Set to 0 to disable inlining altogether
        */
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: ({ name }) => {
                    if (/\.(webp|jpe?g|png)$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]';
                    }
                    if (/\.(woff2|ttf)$/.test(name ?? ''))
                        return 'assets/fonts/[name]-[hash][extname]';
                    return '[name]-[hash][extname]';
                },
            },
        },
    },
};

export default defineConfig(({ mode }): UserConfig => {
    /* Load environment variables based on the mode */
    const env = loadEnv(mode, process.cwd(), '');
    const PORT = parseInt(env.PORT) || undefined;

    /* Production-specific configuration */
    if (mode === 'production') {
        return {
            ...commonConfig,
            plugins: [
                commonConfig.plugins,
                /* Image optimization for production build */
                ViteImageOptimizer({
                    test: /\.(jpe?g|webp|png)$/i,
                    includePublic: false,
                    logStats: true,
                    jpg: {
                        quality: 90,
                    },
                    jpeg: {
                        quality: 90,
                    },
                    webp: {
                        quality: 90,
                    },
                    png: {
                        quality: 90,
                    },
                }),
            ],
            build: {
                ...commonConfig.build,
                sourcemap: 'hidden', // Do not expose sourcemaps
                minify: 'terser', // Terser for minification
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            },
            server: {
                strictPort: true,
                port: PORT,
            },
        };
        /* Development-specific configuration */
    } else if (mode === 'development') {
        return {
            ...commonConfig,
            build: {
                ...commonConfig.build,
                sourcemap: 'inline', // Include inline sourcemaps for easier debugging
            },
            server: {
                strictPort: true,
                port: PORT,
            },
        };
    } else return commonConfig;
});
