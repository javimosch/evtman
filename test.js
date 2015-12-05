var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
gulp.task('tests', function() {
	return gulp.src('tests/*.js')
		.pipe(jasmine());
});
gulp.start('tests');