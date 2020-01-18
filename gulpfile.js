const gulp = require("gulp");
const postcss = require("gulp-postcss");
const livereload = require("gulp-livereload");

function css() {
  return gulp
    .src("src/css/*.css")
    .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
    .pipe(gulp.dest("assets/css"))
    .pipe(livereload({ host: "0.0.0.0", port: 4000 }));
}

function defaultTask(cb) {
  livereload.listen();
  gulp.watch("src/css/*.css", css);
  cb();
}

gulp.task("css", function() {
  return css();
});

exports.default = defaultTask;
