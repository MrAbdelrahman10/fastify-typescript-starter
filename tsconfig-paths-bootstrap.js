require('tsconfig-paths').register({
	baseUrl: 'src',
	paths: {
		'@hooks/*': ['hooks/*'],
		'@i18n/*': ['i18n/*'],
		'@modules/*': ['modules/*'],
		'@plugins/*': ['plugins/*'],
		'@utils/*': ['utils/*']
	}
});
