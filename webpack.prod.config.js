const path = require('path');
const webpack = require('webpack');

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
		new webpack.optimize.UglifyJsPlugin({mangle: false}),
		new webpack.DefinePlugin({ENV_PRODUCTION: JSON.stringify(true)})
	]
};
