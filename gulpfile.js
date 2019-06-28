var gulp = require('gulp');
var notify = require('gulp-notify');
var fs = require('fs');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var rename = require('gulp-rename');
var reload = browserSync.reload;

const paths = {
  scripts: {
    src: 'js/**/*.js'
  },
  styles: {
    src: 'scss/**/*.scss'
  },
  markup: {
    src: '*.html'
  },
  images: {
    src: './img/**/*'
  }
};

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.styles.src, gulp.series('scss'));
  gulp.watch(paths.scripts.src).on('change', reload);
  gulp.watch(paths.markup.src).on('change', reload);
});

gulp.task('scss', () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .on(
      'error',
      notify.onError({
        message: 'Error: <%= error.message %>'
      })
    )
    .pipe(
      autoprefixer({
        grid: true
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dest'))
    .pipe(notify({ message: 'SCSS task complete' }))
    .pipe(browserSync.stream());
});

gulp.task('optimize-images', () => {
  return gulp.src(paths.images.src).pipe(
    imagemin({
      progressive: true,
      optimizationLevel: 9
    })
  );
});

gulp.task('jpg', () => {
  return gulp
    .src('img/convert_to_webp/*.png')
    .pipe(rename(path => (path.extname = '.jpg')))
    .pipe(gulp.dest('img/jpg'));
});

gulp.task('webp', () => {
  return gulp
    .src('img/convert_to_webp/*.{png,jpg}')
    .pipe(
      webp({
        quality: 90
      })
    )
    .pipe(gulp.dest('img/webp'));
});

gulp.task('eslint', () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      eslint({
        parser: 'babel-eslint',
        rules: {
          'no-mutable-exports': 0
        },
        globals: ['jQuery', '$'],
        envs: ['browser']
      })
    )
    .pipe(eslint.format());
});

gulp.task('scripts', () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      plumber({
        errorHandler: function(err) {
          notify.onError({
            title: 'Gulp error in ' + err.plugin,
            message: err.toString()
          })(err);
          beeper();
        }
      })
    )
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('js/dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('images', gulp.series('optimize-images', 'jpg', 'webp'));
gulp.task('build-scripts', gulp.series('scripts', 'eslint'));
gulp.task('default', gulp.parallel('scss', 'serve', 'watch'));
