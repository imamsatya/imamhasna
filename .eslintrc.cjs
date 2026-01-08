module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['vue'],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
    },
    globals: {
        ga: 'readonly',
        cordova: 'readonly',
        __statics: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
    },
}
