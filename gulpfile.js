//导入模块
const gulp = require("gulp"),
        html = require("gulp-htmlmin"),
        css =require("gulp-cssnano"),
        js = require("gulp-uglify"),
        sass = require("gulp-sass"),
        img = require("gulp-imagemin"),
        // rename = require("gulp-rename"),
        concat = require("gulp-concat"),
        babel = require("gulp-babel");
//发布任务
//copy index 
function copyIndex(){
    return gulp.src("./src/index.html")
    .pipe(gulp.dest("./dist"));
}
//处理html
function fnHtml(){
    return gulp.src("./src/pages/*.html")
    .pipe(html())
    .pipe(gulp.dest("./dist/pages"));
}
//处理css
function fncss(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(css())
    .pipe(gulp.dest("./dist/css"));
}
//处理js
function fnjs(){
    return gulp.src("./src/js/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(js())
    .pipe(gulp.dest("./dist/js"));
}
//copy 插件
function fnlib(){
    return gulp.src("./src/lib/*")
    .pipe(gulp.dest("./dist/lib"));
}
//处理图片
function fnimg(){
    return gulp.src("./src/image/*")
    .pipe(img())
    .pipe(gulp.dest("./dist/image"));
}
//监听
function watch(){
    gulp.watch("./src/index.html",copyIndex);
    gulp.watch("./src/pages/*.html",fnHtml);
    gulp.watch("./src/sass/*.scss",fncss);
    gulp.watch("./src/js/*.js",fnjs);
    gulp.watch("./src/lib/*",fnlib);
    gulp.watch("./src/image/*",fnimg)
}

//导出模块
exports.copyindex = copyIndex;
exports.html = fnHtml;
exports.css = fncss;
exports.js = fnjs;
exports.lib = fnlib;
exports.img = fnimg;
exports.default = watch;