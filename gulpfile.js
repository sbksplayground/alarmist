var gulp = require("gulp")
var browserify = require("browserify")
var source = require("vinyl-source-stream")

gulp.task("js", function(){

    return browserify([
            "./assets/js/graph.js",
        ])
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./assests/js/"));

});
