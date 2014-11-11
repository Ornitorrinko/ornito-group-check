'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require("gulp-minify-css");

gulp.task('build', function () {
  return gulp.src(['./src/*.js'])
    .pipe(gulp.dest('./dest'))
    .pipe(rename({
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest'));
});

gulp.task('minify-css', function () {
    gulp.src('./src/*.css')
    .pipe(minifyCss())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['build']);