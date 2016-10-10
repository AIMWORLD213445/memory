var utilities = require('gulp-util');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var del = require('del');

var buildProduction = utilities.env.production;

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/memory-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
