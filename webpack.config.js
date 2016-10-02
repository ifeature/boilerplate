const webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path: './',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{ 
			test: /\.styl$/, 
			loader: 'style-loader!css-loader!stylus-loader'
		},
		{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}]
	},
	plugins: [
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
		},
		output: {
			comments: false,
		},
	})]
}