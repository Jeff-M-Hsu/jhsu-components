'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonLinks = require('@storybook/addon-links');

var _demo = require('@storybook/react/demo');

var _react3 = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)("Welcome", module).add('to Storybook', function () {
  return _react2.default.createElement(_demo.Welcome, { showApp: (0, _addonLinks.linkTo)('Button') });
});