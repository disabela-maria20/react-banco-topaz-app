import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import _import from 'eslint-plugin-import'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'prettier'
    )
  ),
  {
    plugins: {
      import: fixupPluginRules(_import)
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json'
      }
    },

    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    },

    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
]
