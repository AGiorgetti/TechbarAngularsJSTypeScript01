var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var path = require("path");
var inject = require("gulp-inject");
var angularFilesort = require("gulp-angular-filesort");

//var browserSync = require("browser-sync");

// http://blog.rangle.io/angular-gulp-bestpractices/

var paths = {
    src: "./src/", // actual source code
    build: "./build/", // compilation artifacts (tmp)
    dist: "./dist/" // distribution files
}

// gulp-sourcemaps work well for a browser, it does not with vscode, for that to work use the plain command line compiler to emit source maps. 

// build the javascript sample code
gulp.task("build-js", ["copy-templates", "copy-js", "inject"]);

// inject compiled and artifacts

gulp.task("copy-js", function () {
    gulp.src(paths.src + "**/*.js")
        .pipe(gulp.dest(paths.build));
});

gulp.task("copy-templates", function () {
    gulp.src(paths.src + "**/*.html")
        .pipe(gulp.dest(paths.build));
});

// https://github.com/klei/gulp-inject/wiki/Clarifying-injected-paths
gulp.task("inject", 
    function () {
        gulp.src(paths.src + "index.html")
            .pipe(inject(
                gulp.src([paths.build + "**/*.js"]).pipe(angularFilesort())
                , { relative: true }))
            .pipe(gulp.dest(paths.build));
    });