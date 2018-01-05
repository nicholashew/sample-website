module.exports = {
	options: {
		indent: 1,
		indent_char: '	'
	},
	files: {
		expand: true,
		cwd: 'deploy',
		src: ['**/*.html'],	// src
		dest: 'deploy',	// dist
		ext: '.html'
	}
}