"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sizes = {
  Small: "small",
  Medium: "medium",
  Large: "large"
};
var props = {
  regular: function regular() {
    return {
      className: "",
      disabled: (0, _addonKnobs.boolean)("Disabled (disabled)", false),
      padding: (0, _addonKnobs.number)("Padding"),
      onClick: (0, _addonActions.action)("onClick"),
      onFocus: (0, _addonActions.action)("onFocus")
    };
  }
};
(0, _react2.storiesOf)("MenuItem", module).addDecorator(_addonKnobs.withKnobs).add("with text", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_MenuItem.default, _extends({
    size: "small"
  }, regularProps), "Menu Item"), _react.default.createElement(_MenuItem.default, _extends({
    size: "medium"
  }, regularProps), "Menu Item"), _react.default.createElement(_MenuItem.default, _extends({
    size: "large"
  }, regularProps), "Menu Item"));
});