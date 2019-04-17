const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	mode: 'production',
	entry:'./src/index.js', 
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css' //抽离的文件名
		}),
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
			}, 'css-loader']
		}, {
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 6 * 1024,
					outputPath: 'img/'
				}
			}]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		},{
			test: /\.js$/,
			use: [{
				loader:'babel-loader',
				options:{
					presets:['@babel/preset-env']
				}
			}]
		}]
	}
}
