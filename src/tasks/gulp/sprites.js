var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');
del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './src/tasks/gulp/templates/sprite.css'
               }
            }
         
        }
    }
}

gulp.task('beginClean', function(){
    return del(['./src/temp/sprite', './src/assets/images/sprites']);
});

gulp.task('createSprite', createSprite); 
function createSprite(){
    return gulp.src('./src/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/temp/sprite/'));
    
};

gulp.task('copySpriteGraphic', function(){
    return gulp.src('./src/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./src/assets/images/sprites'))
});

gulp.task('copySpriteCSS', copySpriteCSS);
 function copySpriteCSS() {
    return gulp.src('./src/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./src/css//modules'));
};

gulp.task('endClean', function(){
    return del('./src/temp/sprite/');
});

gulp.task('icons', gulp.series('beginClean','createSprite', gulp.parallel('copySpriteGraphic', 'copySpriteCSS' , 'endClean')));
