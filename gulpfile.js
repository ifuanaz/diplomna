const gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    babel = require('gulp-babel');


const PATH = {
    src: {
        Sass: 'src/sass/**/*.scss',
        Js: 'src/js/**/*.js'
    }
}

gulp.task('sass', () => {
    gulp.src(PATH.src.Sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['last 2 versions', '> 5%', 'ie 8']
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
    return gulp.src(PATH.src.Js)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['sass', 'js'], () => {
    gulp.watch(PATH.src.Sass, ['sass']);
    gulp.watch(PATH.src.Js, ['js']);
});
