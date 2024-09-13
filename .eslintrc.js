module.exports = {
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/no-unresolved': 'error', // Verifica se os módulos importados existem
  },
};