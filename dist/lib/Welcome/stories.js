"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonLinks = require("@storybook/addon-links");

var _demo = require("@storybook/react/demo");

var _react2 = require("@storybook/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Welcome", module).add('to Storybook', function () {
  return _react.default.createElement(_demo.Welcome, {
    showApp: (0, _addonLinks.linkTo)('Button')
  });
});