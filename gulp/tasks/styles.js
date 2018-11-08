//////////////
// Required //
//////////////

var gulp 		      = require('gulp'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    cssImport     = require('postcss-import');

//////////////////
// Styles  Task //
//////////////////
gulp.task('styles', function() {
  gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
