module.exports = {
	bsFiles: {
		src: [
			'deploy/*.html', 'deploy/*/*.html',
			'deploy/assets/css/*.css',
			'deploy/assets/js/*.js',
			'deploy/assets/img/*.jpg', 'deploy/assets/img/*.jpeg', 'deploy/assets/img/*.gif', 'deploy/assets/img/*.png', 'deploy/assets/img/*.svg',
			'deploy/assets/img/*/*.jpg', 'deploy/assets/img/*/*.jpeg', 'deploy/assets/img/*/*.gif', 'deploy/assets/img/*/*.png', 'deploy/assets/img/*/*.svg',
			'deploy/assets/img/*/*/*.jpg', 'deploy/assets/img/*/*/*.jpeg', 'deploy/assets/img/*/*/*.gif', 'deploy/assets/img/*/*/*.png', 'deploy/assets/img/*/*/*.svg',
			'deploy/assets/fonts/**', 'deploy/assets/fonts/*/*.eot', 'deploy/assets/fonts/*/*.svg', 'deploy/assets/fonts/*/*.ttf', 'deploy/assets/fonts/*/*.woff', 'deploy/assets/fonts/*/*.woff2',
			'deploy/assets/pdf/*.pdf',
			'deploy/assets/js/vendor/*.js'
		]
	},
	options: {
		debugInfo: true,
		watchTask: true,
		server: {
			baseDir: 'deploy'
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