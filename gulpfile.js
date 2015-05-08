/**
 * Created by keith on 5/7/2015.
 */
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('default',function(){
    return gulp.src('css/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('out/'));
});