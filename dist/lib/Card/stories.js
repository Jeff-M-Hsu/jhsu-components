"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Card = _interopRequireDefault(require("./Card"));

var _Header = _interopRequireDefault(require("../Header"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sizes = {
  small: "small",
  medium: "medium",
  large: "large"
};
var borders = {
  default: "",
  none: "none"
};
var props = {
  regular: function regular() {
    return {
      border: (0, _addonKnobs.select)("Border", borders, "")
    };
  }
};
(0, _react2.storiesOf)("Card", module).addDecorator(_addonKnobs.withKnobs).add("with Icon and Header", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_Card.default, _extends({
    size: "small"
  }, regularProps), _react.default.createElement(_Icon.default, {
    shape: "circle",
    size: "thumbnail"
  }), _react.default.createElement("p", null, _react.default.createElement(_Header.default, null, "John Smith"), _react.default.createElement("br", null), "Email: John@Smith.com", _react.default.createElement("br", null), "Phone: 999-999-9999")), _react.default.createElement(_Card.default, _extends({
    size: "medium"
  }, regularProps), _react.default.createElement(_Icon.default, {
    shape: "circle",
    size: "small",
    src: "https://dummyimage.com/250/888/fff"
  }), _react.default.createElement("p", null, _react.default.createElement(_Header.default, null, "John Smith"), _react.default.createElement("br", null), "Email: John@Smith.com", _react.default.createElement("br", null), "Phone: 999-999-9999")), _react.default.createElement(_Card.default, _extends({
    size: "large"
  }, regularProps), _react.default.createElement(_Icon.default, {
    shape: "circle",
    src: "https://dummyimage.com/250/00f/fff"
  }), _react.default.createElement("p", null, _react.default.createElement(_Header.default, null, "John Smith"), _react.default.createElement("br", null), "Email: John@Smith.com", _react.default.createElement("br", null), "Phone: 999-999-9999")));
});