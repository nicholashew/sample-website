module.exports = {
	sync: {
		updateAndDelete: true,
		files: [
			{cwd: 'src/img/', src: '**', dest: 'dist/assets/img'}, // img
			{cwd: 'src/fonts/', src: '**', dest: 'dist/assets/fonts'}, // fonts
			{cwd: 'src/pdf/', src: '**', dest: 'dist/assets/pdf'}, // pdf
			{cwd: 'src/js/vendor', src: '**', dest: 'dist/assets/js/vendor'} // img
		]
	}
}