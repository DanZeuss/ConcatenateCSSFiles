var gulp = require('gulp');
// module to concat css files
var concatCss = require('gulp-concat-css')
// module to compress css files
var cssnano = require('gulp-cssnano');


gulp.task('concatCss', function()
{
  console.log('Concatening css files');
  return gulp.src('app/css/**/*.css')
    .pipe(concatCss('css.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/css/'))
    .on('error', function(err) {
      console.error('Error in compress task', err.toString());
    });

});


gulp.task('default', ['concatCss']);
