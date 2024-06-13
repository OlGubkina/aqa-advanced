import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended, // optional ?
	{
		rules: {
			// "off" | "warn" | "error"
			"no-unused-vars": "off", // Запрещены неиспользуемые переменные
			"no-undef": "error", // Запрещены undefined переменные
			quotes: ["error", "double"], // Разрешены только Двойные кавывчки
			eqeqeq: "error", // Разрешены только ===
			"no-redeclare": "error", // NO let a, let a
			camelcase: "error", // Разрешён только camelCase
			curly: "error", // После if должны быть {}
			"no useless-assignment": "error", // Assign but never use
			"no-dupe-keys": "error", // NO дубликаты ключей в объектах
			"no-dupe-class-members": "error", // NO Дубликаты классов
			"no-constant-condition": "error", // NO if(true)
			"getter-return": "error", // Любой getter доллжен что-то возвращать
			"for-direction": "error", // Запрет бесконечных циклов
		},
	},
];
