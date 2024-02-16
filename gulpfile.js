const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imgMin = require('gulp-imagemin');



function imageMin(){
    return gulp.src('./source/images/*')
        .pipe(imgMin())
        .pipe(gulp.dest('./build/imagens'));
}


function minify() {
    return gulp.src('./source/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build'));
}

function sassComp(){
    return gulp.src('./source/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
}


exports.default = gulp.series(imageMin, minify, sassComp);