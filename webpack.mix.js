// webpack.mix.js

require('mix-html-builder');

let mix = require('laravel-mix');

if ( ! mix.inProduction()) {
	mix.webpackConfig({
	devtool: 'source-map'
	})
	.sourceMaps();
}

mix.js("resources/js/app.js", "js")
 	.sass('resources/sass/app.scss', 'resources/css')
    .postCss("resources/css/app.css", "css", [
    	require("tailwindcss"),
    ]);

mix.options({ processCssUrls: false });

mix.html({
    htmlRoot: './src/*.html', // Your html root file(s)
    output: './', // The html output folder
    partialRoot: './src/partials',    // default partial path
    layoutRoot: './src/layouts',    // default partial path
    // minify: {
    //     removeComments: true
    // }
});