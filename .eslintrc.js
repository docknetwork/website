module.exports = {
  extends: './node_modules/dev-configs/.eslintrc.browser.react.js',
  rules: {
    // disable rules from base configurations
    'no-console': ['error', {allow: ['warn']}],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {},
};
