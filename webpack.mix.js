// webpack.mix.js

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