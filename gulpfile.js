// Aquí se importarán los plugins necesarios.
// La dependencia imprescindible es gulp.
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat_css = require('gulp-concat-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), //Compresor de imágenes
	imageminPngcrush = require('imagemin-pngcrush'), //Optimiza las imágenes .PNG
	watch = require('gulp-watch'); //Sirve para mantener vigilando los cambios de una tarea

var outdir_css = "dist/css";
var outdir_js = "dist/scripts/";
var dir_img = "./img/**/*",
	outdir_img = "dist/img";
// Se irán definiendo las tareas una a una
gulp.task('css', () =>  
  	gulp.src([
  		'./node_modules/bootstrap/dist/css/bootstrap.min.css',
  		'./node_modules/swiper/dist/css/swiper.min.css',
  		'./sass/*.scss'
  		])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(concat_css('app.min.css'))
    .pipe(gulp.dest(outdir_css))
);

gulp.task('js', function() {
  	gulp.src([
  		'./node_modules/jquery/dist/jquery.min.js',
  		'./node_modules/angular/angular.min.js',
  		'./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
  		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
  		'./node_modules/swiper/dist/js/swiper.min.js',
  		'./node_modules/vivus/dist/vivus.min.js',
  		'./node_modules/angular-sanitize/angular-sanitize.min.js',
  		'./node_modules/scrollreveal/dist/scrollreveal.min.js'
    ])
    .pipe(concat('app.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe( gulp.dest(outdir_js));

  	gulp.src([
  		'./js/main.js',
  		'./app/app.js',
  		'./app/controllers/la-redController.js'
    ])
    .pipe(concat('controllers.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe( gulp.dest(outdir_js));
});

//Tarea para Comprimir Imagenes
gulp.task('comprimir-img', function(){
	return watch(dir_img, function () { //Comprueba si hay cambios en la carpeta y subcarpetas de images
		gulp.src(dir_img+'.{png,jpg,jpeg,gif,svg}') //Ruta donde buscara las imágenes con extensiones .{png,jpg,jpeg,gif,svg} a comprimir
	    .pipe(
	    	imagemin({
		      plugins:[imageminPngcrush()] //Optimiza la conversión de imágenes PNG
		    }))
	    .pipe(gulp.dest(outdir_img)) //Ruta donde se guardaran la imágenes comprimidas
	});
});
