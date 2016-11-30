import path from 'path';

export default {
	devTool: 'eval',
	entry: './src',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: __dirname,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: ['style','css'],
				include: path.join(__dirname, 'src'),
			},
			{ 
        test: /\.(jpg|png)$/,
        loader: "file",
        include: path.join(__dirname, 'src'),
      },
		],
	}
};