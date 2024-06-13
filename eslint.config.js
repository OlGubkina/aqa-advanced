import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{ languageOptions: { globals: globals.browser } },
	//pluginJs.configs.recommended, // optional ?
	{
		rules: {
			"no-unused-vars": "off",
			"no-undef": "error",
			quotes: ["error", "double"],
			eqeqeq: "error",
			"no-redeclare": "error",
			camelcase: "error",
			curly: "error",
			"no-useless-assignment": "error",
			"no-dupe-keys": "error",
			"no-dupe-class-members": "error",
			"no-constant-condition": "error",
			"getter-return": "error",
			"for-direction": "error",
		},
	},
];
