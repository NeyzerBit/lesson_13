const {src, dest, watch} = require('gulp');
sass = require ('gulp-sass'),
autoprefixer = require ('gulp-autoprefixer'),
browserSync = require ('browser-sync').create();

function serveSass() {
  return src('src/sass/**/*.{scss,sass}')
  .pipe(sass()) 
  .pipe(autoprefixer({cascade: false}))
  .pipe(dest('src/css'))
  .pipe(browserSync.stream());
}

function bs() {
  serveSass();
  browserSync.init({
    server: { 
      baseDir: "src" 
}

  });
  watch ('src/*.html').on ('change', browserSync.reload);
  watch ('src/sass/**/*.{scss,sass}', serveSass);
  watch ('src/js/**/*.js').on('change', browserSync.reload);
}

exports.serve = bs;
