"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  Small: "small",
  Medium: "medium",
  Large: "large"
};
var props = {
  regular: function regular() {
    return {
      size: (0, _addonKnobs.select)("Sizes", sizes, "medium"),
      onClick: (0, _addonActions.action)("onClick"),
      onFocus: (0, _addonActions.action)("onFocus")
    };
  }
};
(0, _react2.storiesOf)("MenuItem", module).addDecorator(_addonKnobs.withKnobs).add("with text", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_MenuItem.default, regularProps, "Menu Item"), _react.default.createElement(_MenuItem.default, regularProps, "Menu Item"), _react.default.createElement(_MenuItem.default, regularProps, "Menu Item"));
});