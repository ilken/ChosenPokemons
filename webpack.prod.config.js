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
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015'],
						'stage-2',
						'react'
					],
					plugins: [
						'react-html-attrs',
						'transform-decorators-legacy',
						'transform-class-properties'
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
								minimize: true
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false
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
	devtool: false,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: false,
			minimize: true,
			compress: {
				drop_console: true
			}
		}),
		new ExtractTextPlugin('app.min.css'),
		new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('production') }),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname, 'src/index.html'), to: 'index.html', force: true },
			{ from: path.join(__dirname, 'src/favicon.ico'), to: 'favicon.ico', force: true },
			{ from: path.join(__dirname, 'src/img'), to: 'img', force: true }
		])
	]
};
