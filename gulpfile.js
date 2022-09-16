

const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass')); 
const pug = require('gulp-pug');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('pugHtml', function () {
	return gulp.src('src/pug/**/*.pug','!src/pug/includes/**/*.pug')
		.pipe(
			pug({
				pretty:true
			})
		)
		.pipe(gulp.dest('src/'))
		.pipe(browserSync.stream());
});

gulp.task('js', function () {
	return gulp.src('src/js/*.js')
	
		.pipe(gulp.dest('src/'))
		.pipe(browserSync.stream());
});

//'compressed'
gulp.task('styles', function () {
	return gulp.src("src/sass/**/*.+(scss|sass)")
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest("src/css"))
		.pipe(rename({
			prefix: "",
			suffix: ".min",
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
		
});

gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.+(scss|sass)', gulp.parallel('styles'));
	gulp.watch('src/pug/**/*.pug', gulp.parallel('pugHtml'));
	gulp.watch('src/js/*.js',gulp.parallel('js'));
	gulp.watch('src/*.html').on('change', browserSync.reload);
	
});

gulp.task('default', gulp.parallel('watch','server','pugHtml', 'styles'));