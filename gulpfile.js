const {src, dest, watch, series} = require('gulp');
const imgmin = require('gulp-imagemin');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const copy = require('gulp-copy');


function lessComp(){
    return src('./src/**/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe( dest('./build/style'))
}

function imageMin(){
    return src('./src/img/*')
        .pipe(imgmin())
        .pipe( dest('./build/img'))
}

function cleanBuild(){
    return src('./build')
        .pipe(clean())
}

function copyHTML(){
    return src('./src/index.html')
        .pipe(dest('./build'))
}

exports.default = lessComp
exports.build = series( cleanBuild, imageMin, lessComp, copyHTML);
exports.imgmin = imageMin;
exports.watch = function(){
    watch('./src/**/*.less' , lessComp)
}
