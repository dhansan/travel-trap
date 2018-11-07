//////////////
// Required //
//////////////

var gulp 		      = require('gulp'),
    watch         = require('gulp-watch'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    cssImport     = require('postcss-import'),
    browserSync   = require('browser-sync').create();

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
gulp.task('watch',function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
