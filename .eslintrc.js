module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'auto-import'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'auto-import/auto-import': [2, {
      'rootPath': './src',
      'packages': {
        'd3': 'd3',
        'bloodhound': 'Bloodhound',
        'moment': 'moment',
        'alkali': {
          'hasExports': 'module-path/to/alkali'
        },
        'dgrid': {
          'modulesIn': './bower_components/dgrid'
        },
        'dstore': {
          'modulesIn': './bower_components/dstore'
        }
      }
    }]
  },
};
