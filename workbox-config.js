module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ejs,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^n/
	]
};