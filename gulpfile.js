"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var jade = require('gulp-jade');



gulp.task("style", function() {
  gulp.src("app/sass/style.sass")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("app/css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("jade", function() {
  return gulp.src('app/templates/*.jade')
    .pipe(plumber())
    .pipe(jade(
      {
        pretty: true
      }
    ))
    .pipe(gulp.dest('.')) // указываем gulp куда положить скомпилированные HTML файлы
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style", "jade"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });
  gulp.watch("app/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("app/templates/**/*.jade", ["jade"]);
  gulp.watch("app/*.html").on("change", server.reload);
});


