export function camelToKebabCase(str: string) {
	return str
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '');
}
