'use strict';

const url   = require('url'),
    path    = require('path'),
    webpack = require('webpack'),
    config  = require('../config'),
    paths   = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    if (!config.dev) {
        config.webpack.plugins = config.webpack.plugins.concat(
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    config.webpack.context = path.join(paths.root, paths.src, paths.js);
    config.webpack.output.publicPath = path.join(paths.build, paths.js + '/');
    config.webpack.output.path = path.join(paths.root, paths.build, paths.js);

    webpack(config.webpack, function (err) {
        if (err) {
            console.error(err);
        }
        if (done) {
            done();
        }
    });
};