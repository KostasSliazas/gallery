const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'js'),
        clean: false, // Automatically clean old files in dist
    },
    mode: 'production', // Use 'development' during dev
};
