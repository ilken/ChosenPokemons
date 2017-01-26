var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);

gulp.task('dev', ['sass', 'sass:watch']);
