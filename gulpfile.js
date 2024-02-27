const {src, dest, watch, parallel} = require('gulp');
const imgmin = require('gulp-imagemin');
const less = require('gulp-less');
const clean = require('gulp-clean');





function lessComp(){
    return src('./src/**/main.less')
        .pipe(less())
        .pipe( dest('./build'))
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

exports.default = cleanBuild;
exports.imgmin = imageMin;
exports.watch = function(){
    watch('./src/**/*.less' , lessComp)
}