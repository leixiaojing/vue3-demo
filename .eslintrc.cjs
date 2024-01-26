/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 表示当前目录即为根目录，ESlint规则将被限制在该目录下
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // 解析器
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 需要修改的启用规则及其各自的错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes':  'off'
  }
}
