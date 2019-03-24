
/**
 * Content-Security-Policy directive definition for:
 * 1. script
 * 2. styles
 * 3. images
 * 4. external deps
*/

export default {
	directives: {
		'default-src': [
			"'self'",
			'https://*.flipkart.com',
			'https://*.flixcart.com'
		],
		'script-src': [
			"'self'",
			"'unsafe-inline'",
			"'unsafe-eval'",
			'https://cdn.ravenjs.com',
			'https://*.flixcart.com',
			'blob:',
			req => (req.nonce ? `'nonce-${req.nonce}'` : '')
		],
		'style-src': ["'self'", "'unsafe-inline'", 'https://*.flixcart.com'],
		'img-src': ["'self'", '*', 'data:', 'blob:'],
		'font-src': ["'self'", 'https://*.flixcart.com', 'data:'],
		'frame-src': [
			"'self'",
			'https://*.flipkart.com',
			'http://*.flipkart.com',
			'blob:'
		],
		'worker-src': ["'self'", 'https://*.flipkart.com', 'blob:'],
		'connect-src': ["'self'", '*'],
		'base-uri': ["'self'"],
		// reportUri: 'https://csp.flipkart.com/csp'
	},
	browserSniff: false
};
