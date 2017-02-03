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
				loaders: ['babel-loader']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass',
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
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		publicPath: '/',
		historyApiFallback: true,
		hot: true,
		port: 3000,
		stats: {
			colors: true
		}
	},
	plugins: [
		new webpack.DefinePlugin({ENV_PRODUCTION: JSON.stringify(false)}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin("app.css"),
		new CopyWebpackPlugin([
			{from: path.join(__dirname, 'src/index.html'), to: 'index.html', force: true},
			{from: path.join(__dirname, 'src/favicon.ico'), to: 'favicon.ico', force: true},
			{from: path.join(__dirname, 'src/img'), to: 'img', force: true}
		])
	]
};
