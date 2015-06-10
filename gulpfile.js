var gulp = require('gulp');
var filenamesToJson = require('gulp-filenames-to-json');

gulp.task('default', function() {
    return gulp
        .src(['./js/**/*.js'])
        .pipe(filenamesToJson())
        .pipe(gulp.dest('./.tmp/'));

    // --> 
    // creates a file "./tmp/files.json" with the following contents:
    // ["js/fileA.js","js/fileB.js"]
});