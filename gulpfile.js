const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    runSequence = require('run-sequence'),
    babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('./public/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({
            stream: true
        })
        );
});

gulp.task('minifycss', function () {
    return gulp.src('./public/css/**/*.css')
        .pipe(useref())
        .pipe(gulpIf('*.css', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('build/css/minified'));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('./public/scss/**/*.scss', ['sass']);
});

gulp.task('transpilejs', function () {
    return gulp.src('./public/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./build/js/transpiled'));
});

gulp.task('minifyjs', function () {
    return gulp.src('./build/js/transpiled/**/*.js')
        // Minifies only if it's a JavaScript file
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('build/js/minified')
    );
});

gulp.task('clean:build', function () {
    return del.sync('build');
});

gulp.task('build', function (callback) {
    runSequence('clean:build',
        ['sass', 'minifycss', 'transpilejs'],
        'minifyjs',
        callback
    );
});