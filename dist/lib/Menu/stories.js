"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  regular: function regular() {
    return {
      width: (0, _addonKnobs.text)("Menu Width (width: string)"),
      borderWidth: (0, _addonKnobs.number)("Border Width (borderWidth: number)"),
      borderT: (0, _addonKnobs.text)("Top Border Style (borderT: string)"),
      borderR: (0, _addonKnobs.text)("Right Border Style (borderR: string)"),
      borderB: (0, _addonKnobs.text)("Bottom Border Style (borderB: string)"),
      borderL: (0, _addonKnobs.text)("Left Border Style (borderL: string)"),
      borderA: (0, _addonKnobs.text)("All Border Style (borderA: string)"),
      borderColor: (0, _addonKnobs.text)("Color (borderColor: string)")
    };
  }
};
(0, _react2.storiesOf)("Menu", module).addDecorator(_addonKnobs.withKnobs).add("with MenuItems", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_Menu.default, regularProps, _react.default.createElement(_MenuItem.default, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Item 1"), _react.default.createElement(_MenuItem.default, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Item 2"), _react.default.createElement(_MenuItem.default, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Item 3")));
});