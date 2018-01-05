module.exports = {
	options: {
		indent: 1,
		indent_char: '	'
	},
	files: {
		expand: true,
		cwd: 'dist',
		src: ['**/*.html'],	// src
		dest: 'dist',	// dist
		ext: '.html'
	}
}