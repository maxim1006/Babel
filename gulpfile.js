'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    browserify({
        entries: './client/app/main.js',
        debug: true
    })
    .transform(babelify.configure({
        comments: false
    }))
    .bundle()
    .on('error', onBuildError)
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('client/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);

/*Functions*/
function onBuildError(e) {
    console.log(e.message);
    this.emit('end');
}
