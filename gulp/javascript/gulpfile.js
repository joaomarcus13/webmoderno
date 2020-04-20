const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')//compacta codigo
const babel = require('gulp-babel')//traducao de uma lingua p outra //versoes e tal

gulp.task('default',()=>{
    return gulp.src('src/**/*.js')
            .pipe(babel({
               minified:true,
               comments:false,
               presets:['env']
            }))
            //.pipe(uglify())
            .on('error',function(err){console.log(err)})
            .pipe(concat('codigo.min.js'))
            .pipe(gulp.dest('build'))
})























