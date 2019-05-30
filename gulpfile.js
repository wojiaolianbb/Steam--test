const gulp =require('gulp')
gulp.task('copyprogram',()=>{
    gulp.src('../steam/src').pipe(gulp.dest('../steam/dist'))
})