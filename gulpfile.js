//////////////
// Required //
//////////////

var gulp 		      = require('gulp'),
    watch         = require('gulp-watch'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    cssImport     = require('postcss-import');

gulp.task('default', function() {
  console.log("test berhasil");
});
//////////////////
// Styles  Task //
//////////////////

gulp.task('html', function() {
  console.log("test2 yeaah");
});

gulp.task('styles', function() {
  gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
//////////////////
// Watch   Task //
//////////////////
gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
