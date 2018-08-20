var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		wiredep = require('gulp-wiredep');





gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('bower', function () {
	gulp.src('app/index.jade')
		.pipe(wiredep({
			directory: 'app/js'
		}))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('default', ['browser-sync', 'bower'], function () {
});