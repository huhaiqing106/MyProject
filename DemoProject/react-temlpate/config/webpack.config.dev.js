const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
/**
 * @type {import('webpack-dev-server').Configuration}
 */

const devServer = {
	port: 3000,
	host: 'localhost',
	contentBase: path.join(__dirname, '../publich'),
	watchContentBase: true,
	publicPath: '/',
	compress: true,
	historyApiFallback: true,
	hot: true,
	clientLogLevel: 'error',
	// open: true,
	watchOptions: {
		ignored: /node_modules/,
	},
};

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */

const devConfig = {
	mode: 'development',
	devServer: devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
