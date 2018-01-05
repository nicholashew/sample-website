module.exports = {
	options: {
		apiKey: ''
	},
	compress2: {
		expand: true,
		cwd: 'src/img/',
		src: ['*.gif','*.jpg','*.png'], // src
		dest: 'dist/assets/img/', // dist
	}
}