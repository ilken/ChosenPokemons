const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '/'),
	entry: [
		'./index.prod.js'
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader',
					publicPath: path.join(__dirname, 'dist')
				})
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'client.min.js',
		publicPath: '/'
	},
	devtool: false,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			sourceMap: false,
			mangle: false,
			minimize: true,
			compress: {
				warnings: false,
				drop_console: true
			}
		}),
		new ExtractTextPlugin("app.css"),
		new webpack.DefinePlugin({ENV_PRODUCTION: JSON.stringify(true)}),
		new CopyWebpackPlugin([
			{from: path.join(__dirname, 'src/index.html'), to: 'index.html', force: true},
			{from: path.join(__dirname, 'src/favicon.ico'), to: 'favicon.ico', force: true},
			{from: path.join(__dirname, 'src/img'), to: 'img', force: true}
		])
	]
};
