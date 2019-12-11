const plugins = [
    require('autoprefixer')({
        browsers: ['ie >= 9', 'last 4 version']
    }),
];

module.exports = {
    plugins: plugins
};