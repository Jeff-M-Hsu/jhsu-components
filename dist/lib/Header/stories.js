"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  regular: function regular() {
    return {
      size: (0, _addonKnobs.text)("Font Size", "1.2em"),
      color: (0, _addonKnobs.text)("Font Color", "black")
    };
  }
};
(0, _react2.storiesOf)("Header", module).addDecorator(_addonKnobs.withKnobs).add("default", function () {
  var regularProps = props.regular();
  return _react.default.createElement(_Header.default, regularProps, "Just a Header");
});