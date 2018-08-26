const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

// task para o sass
gulp.task('sass', function(){
    return sass('sass/*.sass').pipe(gulp.dest('css'))
});

// task defalt gulp
gulp.task('default', function(){

});
