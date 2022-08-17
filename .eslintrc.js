module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],

  extends: process.env.FLAG_USE_PRETTIER ? ['airbnb', 'plugin:prettier/recommended'] : 'airbnb',
  rules: {
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'sort-keys': 'off',
    'max-len': 'off',
    'eol-last': 'off',
    'no-undef': 'off',
    'no-eval': 'error',
    'import/first': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
    }],
    'react/jsx-max-props-per-line': [1, {
      maximum: 1,
      when: 'always',
    }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',

    'jsx-a11y/label-has-for': 'off',

    'react/jsx-filename-extension': 'off',

    '@typescript-eslint/array-type': ['error', {
      default: 'array',
    }],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': 'error',

    'react-hooks/rules-of-hooks': 'error',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement'],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'png', 'svg', 'jpg'],
      },
    },
  },
};
