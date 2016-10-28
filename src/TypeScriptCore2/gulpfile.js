/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require("gulp"),
    del = require("del");

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map']
};


gulp.task("clean", function () {
    return del(['wwwroot/scripts/**/*']);
});

gulp.task("default", function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});


var libs = './wwwroot/lib/';

gulp.task('restore:react-js', function () {
    gulp.src([
        'node_modules/react/dist/*.js'
    ]).pipe(gulp.dest(libs + 'react'));
});
gulp.task('restore:react-dom.js', function () {
    gulp.src([
        'node_modules/react-dom/dist/*.js'
    ]).pipe(gulp.dest(libs + 'react-dom'));
});

gulp.task('restore', [
    'restore:react-js',
    'restore:react-dom.js'
]);