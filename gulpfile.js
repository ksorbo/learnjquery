/**
 * Created by keith on 5/7/2015.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');


gulp.task('templates', function(){
    gulp.src('js/handlebars/*.handlebars')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        //.pipe(declare({
        //    namespace: 'MyApp.templates',
        //    noRedeclare: true, // Avoid duplicate declarations
        //}))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('dist'));
});

// JS hint task
gulp.task('jshint', function() {
    gulp.src(['./js/helpers.js','./js/scripts.js','js/setup.js','js/utilities.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css',function(){
    gulp.src(['css/custom.css','css/tablesorter.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all-min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css2',function(){
    gulp.src(['css/custom.css','css/tablesorter.css'])
        .pipe(concatCss('all2-min.css'))
        .pipe(gulp.dest('dist'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['./js/helpers.js','./js/scripts.js','js/setup.js','js/utilities.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
gulp.task('latin',function(){
    return gulp.src('js/latinise-abbr.js')
        //.pipe(rename('latinize-abbr-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));

})