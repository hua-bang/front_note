const { src, dest, series, watch } = require('gulp');
const del = require("del");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload
let sass = require('gulp-sass')(require('sass'));

// gulp-uglify => plugins.uglify = require('gulp-uglify')
const plugins = require('gulp-load-plugins')();

// 压缩js
function js(cb) {
    src('src/js/*.js')
        // 下一个处理环节
        .pipe(plugins.uglify())
        .pipe(dest("./src/dist/js"))
        .pipe(reload({
            stream: true
        }))
    cb();
}

// 对scss/less压缩 输出css
function css(cb) {
    src("src/css/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(plugins.autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(dest("./src/dist/css"))
        .pipe(reload({
            stream: true
        }))
    cb();
}

// 监听文件的变化
function watcher() {
    watch('src/js/*.js', js);
    watch('src/css/*.scss', css);
}

// 删除dist目录
function clean(cb) {
    del("./src/dist")
    cb();
}

// server 任务
function serve(cb) {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    cb();
}

exports.scripts = js;
exports.styles = css;
exports.clean = clean;
exports.default = series([
    clean,
    js,
    css,
    serve,
    watcher
]);