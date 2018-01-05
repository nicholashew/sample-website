module.exports = {
	options: {
		basedir: 'src/pug',
		pretty: true
	},
	files: {
		expand: true,
		cwd: 'src/pug/pages',
		src: ['**/*.pug'], // src
		dest: 'deploy', // dist
		ext: '.html'
	}
}