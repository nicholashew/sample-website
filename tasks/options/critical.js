module.exports = {
	critical: {
		options: {
			base: './',
			css: [
				'dist/assets/css/plugins.min.css',
				'dist/assets/css/style.min.css'
			],
			dimensions: [{
				width: 320,
				height: 70
			}, {
				height: 900,
				width: 1200
			}],
			inline: true,
			minify: true
		},
		src: 'dist/index.html',
		dest: 'dist/index.html'
	}
}