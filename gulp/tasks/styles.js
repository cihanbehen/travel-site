// var gulp = require('gulp'),
// postcss = require('gulp-postcss'),
// autoprefixer = require('autoprefixer'),
// cssvars = require('postcss-simple-vars'),
// nested = require('postcss-nested'),
// cssImport = require("postcss-import");

// var paths = {

// 	styles: {

// 	  src: "src/scss/**/*.scss",

// 	  dest: "src/css"

// 	}

// }

// gulp.task('styles', styles );
// function styles() {

//     return (
  
//       gulp
  
//       .src(paths.styles.src)

//       //.src('./src/css/styles.css')
  
//       .pipe(sass())
  
//       .on("error", sass.logError)
  
//       .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  
//       .pipe(gulp.dest(paths.styles.dest))
  
//       .pipe(browserSync.stream())
  
//     )

     
//     }

//     exports.style = styles;
   