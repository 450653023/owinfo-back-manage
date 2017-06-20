
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var gulp = require('gulp');
var eslint = require('gulp-eslint');


gulp.task('lint', function(){
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint({
            "rules": {
                "indent": 2,
                "no-unused-vars": 2,
                "no-alert": 1
            },
            "env": {
                "browser": true,
                "node": true
            }
        })
        )
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('move_file_img',function(){
    console.log("开始移动文件");
    
});
gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful... 
    var file = ['work/**/*'];
    var des_file = 'source/';
    return gulp.src(file)
        .pipe(gulp.dest(des_file));
    console.log("执行完毕，请提交你的代码");
});


gulp.task('webserver', function(){
// 监听文件变动
// gulp.watch(['source/js/**/*.js']);
// gulp.watch(['source/css/**/*.css']);
// gulp.watch(['source/tpl/**/*.html']);
// 配置web服务器
    gulp.src('./source')
        .pipe(webserver({
            host: '0.0.0.0',
            port: '8000',
            // livereload: true,
            fallback: 'index.html'
        }));
});