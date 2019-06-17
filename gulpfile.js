var gulp = require('gulp'),

sass = require('gulp-sass'),

postcss = require('gulp-postcss'),

fs = require("fs")

atImport = require("postcss-import"),

autoprefixer = require('autoprefixer'),

cssvars = require('postcss-simple-vars'),

nested = require('postcss-nested'),

browserSync = require('browser-sync').create(),

mixins = require('postcss-mixins');



var paths = {

	styles: {

	  src: "src/scss/**/*.scss",

	  dest: "src/css"

	}

  }

   function style() {

      return (
    
        gulp
    
        .src(paths.styles.src)
    
        .pipe(sass())
    
        .on("error", sass.logError)
    
        .pipe(postcss([atImport, mixins, cssvars, nested, autoprefixer]))
    
        .pipe(gulp.dest(paths.styles.dest))
    
        .pipe(browserSync.stream())
    
      )

       
    
      }

      function reload() {

        browserSync.reload();
       
         }    

  
function watch() {

    browserSync.init({

      server: {

        baseDir:"src"

      }

    })

   gulp.watch("src/*.html", reload);
   gulp.watch(paths.styles.src, gulp.series(style) );

   

}

   exports.watch = watch;
   exports.style = style;


  var build = gulp.parallel(style,watch);

  gulp.task('build', build);
  gulp.task('default', build);












	
 










 



 

 



