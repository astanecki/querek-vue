module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: 'iOS >= 9, Android >= 4.1',
            remove: false
        })
    ]
};
