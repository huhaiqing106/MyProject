const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../publich/index.html'),
			favicon: path.resolve(__dirname, '../publich/favicon.ico'),
			hash: true,
		}),
		new MiniCssPlugin({
			filename: 'css/[name].css',
		}),
		new CleanWebpackPlugin({
			dry: false,
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssPlugin.loader,
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true, // 启用css modules
						},
					},
				],
			},
			{
				test: /\.sass$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[hash:base64:6]',
							},
						},
					},
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[hash:base64:6]',
							},
						},
					},
					{ loader: 'less-loader' },
				],
			},
			{
				test: /\.(jep?g|png|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]',
					},
				},
			},
			{
				test: /woff|ttf|eot|svg|otf/,
				use: {
					loader: 'file-loader',
				},
			},
			{
				test: /\.jpe?g|png|gif/, // 图片在范围内使用url-loader处理，转化成base64，范围外使用file-loader处理
				use: {
					loader: 'url-loader',
					options: {
						limit: 100 * 1024,
						name: `img/[name].[ext]`,
					},
				},
			},
		],
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
				canPrint: true,
			}),
			new UglifyjsPlugin({
				uglifyOptions: {
					output: {
						beautify: false, // 不格式化
						comments: false, // 不保留注释
					},
					compress: {
						drop_console: true, // 去除打印语句
					},
				},
			}),
		],
	},
};
