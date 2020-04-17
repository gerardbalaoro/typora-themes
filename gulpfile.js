const gulp = require('gulp')
const rename = require('gulp-rename')
const replace = require('gulp-string-replace')
const theme = require('./theme/theme')

function copyAssets() {
  return gulp
  .src('theme/custom/**/*.*')
  .pipe(gulp.dest('dist/' + theme.name + '/'))
}

function renameTheme() {
  return gulp
  .src('theme/custom.css')
  .pipe(replace(/url\(\'\.\/custom\//gm, `url('./${theme.name}/`))
  .pipe(rename({ basename: theme.name }))
  .pipe(gulp.dest('dist/'))
}

gulp.task('build', gulp.series(copyAssets, renameTheme))