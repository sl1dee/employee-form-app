const path = require('path');

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, 'src/components'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@ui': path.resolve(__dirname, 'src/ui'),
    };
    return config;
};
