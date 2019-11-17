const path = require('path');
const entryPath = 'src';
const entryFile = 'index.js';

module.exports = {
	entry: `./${entryPath}/${entryFile}`,
	output: {
		filename: 'out.js',
		path: path.resolve(__dirname, `${entryPath}/build`)
	},
	devServer: {
		contentBase: path.join(__dirname, `${entryPath}`),
		publicPath: '/build/',
		compress: true,
		port: 3001,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
