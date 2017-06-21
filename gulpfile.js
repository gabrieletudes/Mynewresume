/* gabriel/mynewresume
 *
 * /gulpfile.js - Gulp tasks
 *
 *
 * coded by gabriel!
 *
 * started at 09/02/2017
 */

 var gulp = require( "gulp" ),
     image = require( "gulp-image" ),
     sass = require( "gulp-sass" ),
     autoprefixer = require( "gulp-autoprefixer" ),
     csso = require( "gulp-csso" )
     babel = require( "gulp-babel" );

// --- Task for images
gulp.task( "images", function(){
    gulp.src( "sources/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "build/images" ) )
} );
// --- Task for styles
gulp.task( "css", function(){
    gulp.src( "sources/sass/**/*.scss" )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( "build/css" ) );
} );
// --- Task for js
gulp.task( "js", function(){
    gulp.src( "sources/js/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "build/js" ) );
} );
// --- Watch tasks
gulp.task( "watch", function(){
    gulp.watch( "sources/images/**", [ "images" ] );
    gulp.watch( "sources/sass/**/*.scss", [ "css" ] );
    gulp.watch( "sources/js/**/*.js", [ "js" ] );
});
// --- Aliases
gulp.task( "default", [ "images", "css", "js" ] );
gulp.task( "work", [ "default", "watch" ] );
