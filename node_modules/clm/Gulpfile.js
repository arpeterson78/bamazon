"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var clean = require("gulp-clean");


gulp.task("default", function () {

    gulp.src('dist/*', {read: false})
        .pipe(clean());

    return gulp.src("src/**/*.js")
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest("dist"));

});
