module.exports = {
	stylusCSS: {
		options: {
			compress: false
		},
		files: {
			'src/css/structure/style.css': [ // dist
				'src/css/structure/*/*.styl' // src
			]
		}
	}
}