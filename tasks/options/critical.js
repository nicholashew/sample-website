module.exports = {
	critical: {
		options: {
			base: './',
			css: [
				'deploy/assets/css/plugins.min.css',
				'deploy/assets/css/style.min.css'
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
		src: 'deploy/index.html',
		dest: 'deploy/index.html'
	}
}