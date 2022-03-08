const mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
    uglify: {
        uglifyOptions: {
            compress: { pure_funcs: ['console.log', 'console.info'] },
            output: { comments: '/^!/' }
        }
    }
});


/*
 |------------------------------------------------------------------------------
 | Asset Management
 |------------------------------------------------------------------------------
 */

mix.js('resources/js/admin', 'public/js');
mix.js('resources/js/main', 'public/js');
mix.js('resources/js/vendor', 'public/js');

mix.sass('resources/sass/main.scss', 'public/css', {
    implementation: require('node-sass')
});
mix.sass('resources/sass/dashboard.scss', 'public/css', {
    implementation: require('node-sass')
});
