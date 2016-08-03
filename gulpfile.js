var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var inject = require('gulp-inject');

var jsFiles = ['./connectors/**/*.js'];
var views = ['./connectors/**/*.html'];

gulp.task('style', function(){

	//gulp.src(jsFiles)
	//	.pipe(jshint())
	//	.pipe(jshint.reporter('jshint-stylish', {
	//		verbose: true
	//	}));
});

gulp.task('inject', function(){

	// inject bower deps
	//var wiredep = require('wiredep').stream;

	// inject our connectors
	var injectSrc = gulp.src(jsFiles, { read: false });
	var injectOptions = {
		ignorePath: '/connectors'
	};

	// bower deps
	var options = {};
	//var options = {
	//	bowerJson: require('./bower.json'),
	//	directory: './public/lib',
	//	ignorePath: '../../public'
	//};

	return gulp.src(views)
		//.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./connectors'));

});

gulp.task('serve', ['style', 'inject'], function(){

	var options = {
		script: 'server.js',
		delayTime: 1,
		env: {
			'PORT': 4444
		},
		watch: jsFiles
	};

	return nodemon(options)
		.on('restart', function(ev){
			console.log('restarting..');
		});

});