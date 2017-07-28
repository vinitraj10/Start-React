var path = require('path');
var webpack = require('webpack');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack/hot/only-dev-server');
    }
}

BUILD_DIR = path.resolve(__dirname,'dist/js');
DEV_DIR = path.resolve(__dirname,'src');

var config = {
	entry:DEV_DIR + '/index.js',
	output:{
		path:BUILD_DIR,
		filename:'bundle.min.js',
	},
	module:{
		loaders:[
			{
				test:/\.jsx?/,
				include:DEV_DIR,
				loader:'babel-loader',
				exclude:/node_modules/,
			}
		]
	},
};
module.exports = config;