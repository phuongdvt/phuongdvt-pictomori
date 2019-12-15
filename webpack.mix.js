const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/auth.js', 'public/js/auth.js')
   .js('resources/js/home.js', 'public/js/home.js')
   .js('resources/js/photographer.js', 'public/js/photographer.js')
   .js('resources/js/book.js', 'public/js/book.js')
   .js('resources/js/review.js', 'public/js/review.js')
   .js('resources/js/addPhotog.js', 'public/js/addPhotog.js')
   .js('resources/js/editPhotog.js', 'public/js/editPhotog.js')
   .js('resources/js/faq.js', 'public/js/faq.js')
   .sass('resources/sass/app.scss', 'public/css')
   .sourceMaps(false);
