const sass = require('gulp-ruby-sass');
const watch = require('gulp-watch');
const gulp = require('gulp');

// task para o sass
gulp.task('sass', function(){
    return sass('sass/**/*.sass').pipe(gulp.dest('css'))
});

// task para o watch
gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass'])
});

// task defalt gulp
gulp.task('default', ['sass', 'watch']);
