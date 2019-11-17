"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Header = _interopRequireDefault(require("../Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var topBar = {
  height: "4em",
  padding: "1em",
  backgroundColor: "black"
};
(0, _react2.storiesOf)("Dropdown", module).addDecorator(_addonKnobs.withKnobs).add("default", function () {
  return _react.default.createElement("div", {
    style: topBar
  }, _react.default.createElement(_Header.default, {
    color: "white",
    size: "2.5em"
  }, "Dropdown"), _react.default.createElement(_Dropdown.default, {
    src: "https://dummyimage.com/250x250.jpg/fff"
  }, _react.default.createElement("div", null, _react.default.createElement(_MenuItem.default, null, "Help"), _react.default.createElement(_MenuItem.default, null, "Account"), _react.default.createElement(_MenuItem.default, null, "Logout"))));
});