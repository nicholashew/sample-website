module.exports = {
	pluginsCSS: {
		files: {
			'dist/assets/css/plugins.min.css': ['src/css/bootstrap/bootstrap.min.css', 'src/css/plugins/*.css']
		}
	},
	styleCSS: {
		files: {
			'dist/assets/css/style.min.css': ['src/css/structure/style.css']
		}
	}
}