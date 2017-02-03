const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
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
		'./js/client.dev.js'
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
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		publicPath: '/',
		hot: true,
		port: 3000
	},
	plugins: [
		new webpack.DefinePlugin({ENV_PRODUCTION: JSON.stringify(false)}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
