const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '/'),
	entry: [
		// activate HMR for React
		'react-hot-loader/patch',

		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint,
		'webpack-dev-server/client?http://localhost:3000',

	    // bundle the client for hot reloading
	    // only- means to only hot reload for successful updates
		'webpack/hot/only-dev-server',

		//App entry point
		'./index.dev.js'
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: __dirname,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }],
						'stage-2',
						'react'
					],
					plugins: [
						'react-html-attrs',
						'transform-decorators-legacy',
						'transform-class-properties',
						'react-hot-loader/babel'
					]
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					publicPath: path.join(__dirname, 'dist')
				})
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.min.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		publicPath: '/',
		historyApiFallback: true,
		hot: true,
		port: 3000,
		open: true,
		stats: {
			colors: true,
			modules: false,
			reasons: true
		}
	},
	watch: true,
	plugins: [
		new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('development') }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin('app.min.css'),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname, 'src/index.html'), to: 'index.html', force: true },
			{ from: path.join(__dirname, 'src/favicon.ico'), to: 'favicon.ico', force: true },
			{ from: path.join(__dirname, 'src/img'), to: 'img', force: true }
		]),
		function () {
			this.plugin('watch-run', function (watching, callback) {
				console.log('\x1b[36mStart compiling: ' + new Date() + '\x1b[0m');
				callback();
			});
		}
	]
};
