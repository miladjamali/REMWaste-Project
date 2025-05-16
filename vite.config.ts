import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({mode}) => {
    // Load environment variables based on the mode
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': '/src',
                '@types': '/src/@types',
                '@assets': '/src/assets',
                '@components': '/src/components',
                '@pages': '/src/pages',
                '@client': '/src/client',
                '@config': '/src/config',
                '@context': '/src/context',
                '@styles': '/src/styles',
            },
        },
        server: {
            host: '0.0.0.0',
            port: parseInt(env.VITE_APP_PORT, 10) || 3000,
        },
    };
});