const gulp =require('gulp')
gulp.task('copyprogram',()=>{
    gulp.src('./src/').pipe(gulp.dest('../steam/dist'))
})