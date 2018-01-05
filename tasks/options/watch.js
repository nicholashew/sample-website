module.exports = {
	options: {
		spawn: false,
	},
	pug: {
		files: ['src/pug/includes/*.pug', 'src/pug/pages/*.pug', 'src/pug/pages/*/*.pug'],
		tasks: ['pug', 'prettify']
	},
	cssmin: {
		files: ['src/css/bootstrap/*.css', 'src/css/plugins/*.css'],
		tasks: ['cssmin']
	},
	stylus: {
		files: ['src/css/structure/*.styl', 'src/css/structure/*/*.styl'],
		tasks: ['stylus', 'cssmin']
	},
	scripts: {
		files: ['src/js/*.js', 'src/js/plugins/*.js'],
		tasks: ['jshint', 'concat', 'uglify']
	},
	img: {
		files: [
			'src/img/*.jpg', 'src/img/*.jpeg', 'src/img/*.gif', 'src/img/*.png', 'src/img/*.svg',
			'src/img/*/*.jpg', 'src/img/*/*.jpeg', 'src/img/*/*.gif', 'src/img/*/*.png', 'src/img/*/*.svg',
			'src/img/*/*/*.jpg', 'src/img/*/*/*.jpeg', 'src/img/*/*/*.gif', 'src/img/*/*/*.png', 'src/img/*/*/*.svg'
		],
		tasks: ['sync']
	},
	fonts: {
		files: ['src/fonts/*/*.eot', 'src/fonts/*/*.svg', 'src/fonts/*/*.ttf', 'src/fonts/*/*.woff', 'src/fonts/*/*.woff2'],
		tasks: ['sync']
	},
	pdf: {
		files: ['src/pdf/*.pdf', 'src/pdf/*/*.pdf'],
		tasks: ['sync']
	},
	scriptsVendor: {
		files: ['src/js/vendor/*.js'],
		tasks: ['sync']
	}
}