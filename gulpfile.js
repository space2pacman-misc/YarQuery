'use strict';

var gulp = require("gulp"),
    rigger = require("gulp-rigger"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    rimraf = require("rimraf"),
    browsersync = require("browser-sync"),
    reload = browsersync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js'
    },
    clean: 'build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "browsersync"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js-min:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify().on('error', function (e) {
            console.log(e.message)
        }))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build', [
    'html:build',
    'js-min:build',
    'js:build'
]);

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js-min:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('browsersync', function () {
    browsersync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('_default', ['build', 'browsersync', 'watch']);