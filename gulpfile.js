var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('jshint', () => {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

/*gulp.task('default', ['watch']);

gulp.task('watch', () => {
    gulp.watch(jsFiles, ['jshint']);
});*/

