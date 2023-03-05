module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@apps', './src/apps'],
          ['@components', './src/components'],
          ['@core', './src/core'],
          ['@config', './src/config'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'comma-dangle': ['error', 'never'],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    camelcase: 'off',
    'function-paren-newline': ['error', 'multiline-arguments'],
    // Mute eslint to let @typescript-eslint trigger the errors
    'no-unused-vars': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
      },
    ],
    semi: ['error', 'never'],
    'no-tabs': 'warn',
    indent: [
      'error',
      2,
      {
        VariableDeclarator: 2,
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          body: 1,
          parameters: 'first',
        },
        CallExpression: {
          arguments: 'first',
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
      },
    ],
    'max-len': [
      'error',
      {
        code: 110,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true, // allow longer comments
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],
    'newline-per-chained-call': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-fallthrough': [
      'warn',
      {
        commentPattern: 'break[\\s\\w]*omitted',
      },
    ], // warn if switch case without break, except there is comment with "break omitted" in the case
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          VariableDeclarator: true,
        },
      },
    ], // cause we dont align by value, there should be no multispaces
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-param-reassign': 'off',
    //// import rules -> https://github.com/benmosher/eslint-plugin-import
    'import/prefer-default-export': 0, // 3rd party librarys sometimes dont have a default export
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jsx-a11y/anchor-has-content': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // to increase future coding, raise a warning when onclick on somethin like a div tag
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        // replaces label-has-for
        labelAttributes: ['label'], // only check for lables
        assert: 'htmlFor', // check if htmlfor is present
        depth: 3,
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    //// react rules -> https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'off', // would be nice but to many props are missing currently
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [0],
    'react/jsx-no-constructed-context-values': 0,
  },
}
