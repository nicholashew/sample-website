module.exports = {
	bsFiles: {
		src: [
			'dist/*.html', 'dist/*/*.html',
			'dist/assets/css/*.css',
			'dist/assets/js/*.js',
			'dist/assets/img/*.jpg', 'dist/assets/img/*.jpeg', 'dist/assets/img/*.gif', 'dist/assets/img/*.png', 'dist/assets/img/*.svg',
			'dist/assets/img/*/*.jpg', 'dist/assets/img/*/*.jpeg', 'dist/assets/img/*/*.gif', 'dist/assets/img/*/*.png', 'dist/assets/img/*/*.svg',
			'dist/assets/img/*/*/*.jpg', 'dist/assets/img/*/*/*.jpeg', 'dist/assets/img/*/*/*.gif', 'dist/assets/img/*/*/*.png', 'dist/assets/img/*/*/*.svg',
			'dist/assets/fonts/**', 'dist/assets/fonts/*/*.eot', 'dist/assets/fonts/*/*.svg', 'dist/assets/fonts/*/*.ttf', 'dist/assets/fonts/*/*.woff', 'dist/assets/fonts/*/*.woff2',
			'dist/assets/pdf/*.pdf',
			'dist/assets/js/vendor/*.js'
		]
	},
	options: {
		debugInfo: true,
		watchTask: true,
		server: {
			baseDir: 'dist'
		},
		port: '4000',
		ghostMode: {
			clicks: true,
			scroll: true,
			links: true,
			forms: true
		}
	}
}