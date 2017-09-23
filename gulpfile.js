const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('sass', function () {
    return gulp.src('./public/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({
            stream: true
        })
        );
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('./public/scss/**/*.scss', ['sass']);
    // gulp.watch('public/*.html', browserSync.reload); 
    // gulp.watch('public/js/**/*.js', browserSync.reload); 
});

// gulp.task('browserSync', function () {
//     browserSync.init({
//         server: {
//             baseDir: 'public'
//         },
//     });
// });

// gulp.task('minifyjs', function () {
//     return gulp.src('public/*.html')
//         // Minifies only if it's a JavaScript file
//         .pipe(gulpIf('*.js', uglify()))
//         .pipe(useref({

//             searchPath: './node_modules',
//             transformPath: function (filePath) {
//                 return filePath.replace('/libs', '') || filePath.replace('/static', '');
//             },

//         }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('useref', function(){
//     return gulp.src('app/*.html')
//       .pipe(useref())
//       .pipe(gulpIf('*.js', uglify()))
//       // Minifies only if it's a CSS file
//       .pipe(gulpIf('*.css', cssnano()))
//       .pipe(gulp.dest('dist'))
//   });

gulp.task('clean:dist', function () {
    return del.sync('dist');
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'browserSync'],
        callback
    );
});