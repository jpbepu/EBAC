const { src, dest, series, watch} = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');




function lessComp() {
    return src('./src/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(dest('./build'));
};

function imageMin() {
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'));
};





exports.default = series(lessComp);
exports.imagemin = imageMin;
exports.watch = ()=>{
  watch('./src/*.less', {ignoreInitial:false}, lessComp);
};
