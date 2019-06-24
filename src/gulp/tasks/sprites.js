var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');
 
var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './src/gulp/tasks/templates/sprite.css'
        }
      }
    }
  }
}
 
gulp.task('createSprite', createSprite);
function createSprite() {
  return gulp.src('./src/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/temp/sprite/'));
};
 
gulp.task('copySpriteGraphic', copySpriteGraphic);
function copySpriteGraphic() {
  return gulp.src('./src/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./src/assets/images/sprites'));
};
 
gulp.task('copySpriteCSS', copySpriteCSS);
function copySpriteCSS() {
  return gulp.src('./src/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./src/assets/styles/modules'));
};
 
gulp.task('icons', gulp.series('createSprite', gulp.parallel('copySpriteGraphic', 'copySpriteCSS')));