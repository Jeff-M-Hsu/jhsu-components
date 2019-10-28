"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shapes = {
  circle: "circle",
  square: ""
};
var sizes = {
  native: "",
  small: "small",
  thumbnail: "thumbnail"
};
var props = {
  regular: function regular() {
    return {
      shape: (0, _addonKnobs.select)("Shape", shapes, "circle"),
      size: (0, _addonKnobs.select)("Size", sizes, ""),
      src: (0, _addonKnobs.text)("Source (src)", "https://dummyimage.com/250x250.jpg/612/ffffff")
    };
  }
};
(0, _react2.storiesOf)("Icon", module).addDecorator(_addonKnobs.withKnobs).add("default", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_Icon.default, regularProps));
});