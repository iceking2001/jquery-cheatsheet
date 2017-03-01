module.exports = {
    url: 'http://oscarotero.com/jquery',
    deploy: 'oscarotero.com:~/www/jquery',
    paths: {
        root: __dirname,
        src: 'src',
        build: 'doc',
        tmp: 'tmp',
        data: 'data',
        layouts: 'layouts',
        partials: 'layouts/partials',
        css: 'css',
        js: 'js',
        img: 'img'
    },
    metadata: {
        title: 'jQuery API速查文档 | wilon.github.io',
        description: 'jQuery cheat sheet in HTML with links to the original API documentation. Created by Oscar Otero',
        author: 'Oscar Otero - https://oscarotero.com',
        keywords: 'jQuery, javascript, cheatsheet, api, resource, web developer',
        twitter: '@misteroom'
    },
    copy: [
        'src/jquery.pdf',
        'src/jquery.png',
        'src/sw.js',
        'bower_components/sw-toolbox/sw-toolbox.js'
    ],
    stylecow: require('./stylecow.json'),
    webpack: require('./webpack.config'),
    favicon: require('./faviconDescription.json')
};
