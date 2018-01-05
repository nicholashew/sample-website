module.exports = {
	sync: {
		updateAndDelete: true,
		files: [
			{cwd: 'src/img/', src: '**', dest: 'deploy/assets/img'}, // img
			{cwd: 'src/fonts/', src: '**', dest: 'deploy/assets/fonts'}, // fonts
			{cwd: 'src/pdf/', src: '**', dest: 'deploy/assets/pdf'}, // pdf
			{cwd: 'src/js/vendor', src: '**', dest: 'deploy/assets/js/vendor'} // img
		]
	}
}