module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'react/prop-types': 0,
		'react/jsx-uses-react': 0,
		'react/react-in-jsx-scope': 0,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 0,
				'react/display-name': 0,
				'@typescript-eslint/no-namespace': 0,
			},
		},
	],
}
