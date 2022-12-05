module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
  ],
  globals: {
    Atomics: "readonly",
    JSX: true,
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "import",
    "typescript-sort-keys",
    "sort-destructure-keys",
    "sort-keys-fix",
  ],
  rules: {
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    camelcase: "off",
    "import/extensions": [
      2,
      "ignorePackages",
      {
        json: "always",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts*"],
      },
    ],
    "import/no-unresolved": [2, { caseSensitive: false }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            group: "builtin",
            pattern: "react",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "import/prefer-default-export": "off",

    "jest/expect-expect": [2],
    "jest/valid-title": [0],

    // we use @typescript/no-shadow
    "no-shadow": "off",

    "no-unused-expressions": [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],

    // we use @typescript/no-unused-vars
    "no-unused-vars": "off",

    // we use @typescript/no-use-before-define
    "no-use-before-define": "off",

    "sort-destructure-keys/sort-destructure-keys": 2,

    "sort-keys-fix/sort-keys-fix": [
      "error",
      "asc",
      { caseSensitive: true, natural: false },
    ],

    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
};
