const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: [
		'./js/client.prod.js'
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
		path: path.resolve(__dirname, 'build/js/'),
		filename: 'client.min.js',
		publicPath: '/'
	},
	devtool: false,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({mangle: false}),
		new webpack.DefinePlugin({ENV_PRODUCTION: JSON.stringify(true)})
	]
};
