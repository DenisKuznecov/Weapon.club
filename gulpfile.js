'use strict';

var postcss      = require('gulp-postcss');
var gulp         = require('gulp');
var autoprefixer = require('autoprefixer');

gulp.task('css', function () {
	var processors = [
	autoprefixer({browsers: ['last 20 version']})
	];
	return gulp.src('./styles/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function  () {
	gulp.watch('styles/main.css', function  () {
		gulp.run('css');
	});
});