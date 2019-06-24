var gulp = require('gulp'),
watch = require("gulp-watch"),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require("browser-sync").create();

var paths = {

	styles: {

	  src: "./src/css/styles.css",

	  dest: "./src/temp/styles"

	}

}

gulp.task('styles', styles);
function styles() {
  console.log("Styles task ran.");
  return gulp.src('./src/css/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./src/temp/styles'));
};
    gulp.task('watch', watchCSS);
    function watchCSS() {
      browserSync.init({
        server: {
          baseDir: "src"
        }
      });
      gulp.watch("./src/css/**/*.css", gulp.series(styles, cssInject));
    }
     
    function watchHTML() {
      gulp.watch("./src/index.html", function() {
        browserSync.reload();
      });
    }
     
    function cssInject() {
      return gulp.src("./src/temp/styles/styles.css").pipe(browserSync.stream());
    }
     
    exports.watch = gulp.parallel(watchCSS, watchHTML);

    
   

  //gulp.task('watch', gulp.parallel(watchCSS, watchHTML));


 
