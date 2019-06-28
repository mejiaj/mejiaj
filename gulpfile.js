var gulp          = require('gulp');
var notify        = require('gulp-notify');
var fs            = require('fs');
var sass          = require('gulp-sass');
var sassGlob      = require('gulp-sass-glob');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync').create();
var reload        = browserSync.reload;

const paths = {
  scripts: {
    src: 'js/**/*.js',
    },
  styles: {
    src: 'scss/**/*.scss',
  },
  markup: {
    src: '*.html'
  }
};

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('watch', () => {
  gulp.watch(paths.styles.src, gulp.series('scss'));
  gulp.watch(paths.scripts.src).on('change', reload);
  gulp.watch(paths.markup.src).on('change', reload);
});

gulp.task('scss', () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', notify.onError({
      message: 'Error: <%= error.message %>'
      }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dest'))
    .pipe(notify({ message: 'SCSS task complete' }))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('scss', 'serve', 'watch'));
