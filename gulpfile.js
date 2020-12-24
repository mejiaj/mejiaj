const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const reload = browserSync.reload;

sass.compiler = require('sass');

const paths = {
  scripts: {
    src: 'js/*.js'
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

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

function watch(done) {
  gulp.watch(paths.styles.src, scss);
  gulp.watch(paths.scripts.src, buildScripts);
  gulp.watch(paths.markup.src).on('change', reload);
  done();
}

function scss() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dest"))
    .pipe(browserSync.stream());
}

function optimizeImages() {
  return gulp.src(paths.images.src).pipe(
    imagemin({
      progressive: true,
      optimizationLevel: 9
    })
  );
}

function convertJpg() {
  return gulp
    .src('img/convert_to_webp/*.png')
    .pipe(rename(path => (path.extname = '.jpg')))
    .pipe(gulp.dest('img/jpg'));
};

function convertWebP() {
  return gulp
    .src('img/convert_to_webp/*.{png,jpg}')
    .pipe(
      webp({
        quality: 90
      })
    )
  .pipe(gulp.dest('img/webp'));
}

function eslint() {
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
}

function buildScripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      plumber({
        errorHandler: function(err) {
          console.error(err.toString());
          beeper();
        }
      })
    )
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('js/dist'))
    .pipe(reload({ stream: true }));
}

exports.images = gulp.series(optimizeImages, convertJpg, convertWebP);
exports.buildScripts = gulp.series(buildScripts, eslint);
exports.default = gulp.series(scss, serve, watch);
