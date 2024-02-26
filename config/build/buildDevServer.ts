import type { Configuration, Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from '../../config/types/config';

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
