module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin

    ],
    parserOptions: {
        ecmaVersion: 2020,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,  // Allows for the parsing of JSX
        },
    },
    settings: {
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/interface-name-prefix": [
            "error",
            {
                "prefixWithI": "always"
            }
        ],
        "@typescript-eslint/no-this-alias": [
            "error",
            {
              "allowedNames": ["that"] // Allow `const that = this`; `[]` by default
            }
        ],
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
              "allowSingleExtends": true
            }
        ]
    },
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    }
};
