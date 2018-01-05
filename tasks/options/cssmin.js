module.exports = {
	pluginsCSS: {
		files: {
			'deploy/assets/css/plugins.min.css': ['src/css/bootstrap/bootstrap.min.css', 'src/css/plugins/*.css']
		}
	},
	styleCSS: {
		files: {
			'deploy/assets/css/style.min.css': ['src/css/structure/style.css']
		}
	}
}