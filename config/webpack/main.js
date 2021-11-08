const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								sourceMap: true,
							}
						},
						'sass-loader'
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
    		template: 'src/index.html',
    	})
	],
	devServer: require('./devServer'),
};