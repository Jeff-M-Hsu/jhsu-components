"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("../Button"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Header = _interopRequireDefault(require("../Header"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  small: "small",
  medium: "medium",
  large: "large"
};
var props = {
  regular: function regular() {
    return {
      size: (0, _addonKnobs.select)("Width", sizes, "medium"),
      title: (0, _addonKnobs.text)("Title", "Section Title")
    };
  }
};
(0, _react2.storiesOf)("Accordion", module).addDecorator(_addonKnobs.withKnobs).add("with content", function () {
  var regularProps = props.regular();
  return _react.default.createElement("div", null, _react.default.createElement(_Accordion.default, regularProps, _react.default.createElement(_Icon.default, {
    shape: "square",
    float: "right"
  }), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"", _react.default.createElement("br", null), _react.default.createElement("br", null), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"", _react.default.createElement("br", null), _react.default.createElement("br", null), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"", _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_Icon.default, {
    size: "small",
    shape: "square",
    float: "left"
  }), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"", _react.default.createElement("br", null), _react.default.createElement("br", null), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"", _react.default.createElement("br", null), _react.default.createElement("br", null), "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""), _react.default.createElement(_Accordion.default, regularProps, _react.default.createElement(_Button.default, {
    theme: "primary",
    size: "medium"
  }, "Hello"), _react.default.createElement(_Card.default, {
    size: "large"
  }, _react.default.createElement(_Icon.default, {
    shape: "circle",
    size: "small",
    src: "https://dummyimage.com/250/888/fff"
  }), _react.default.createElement("p", null, _react.default.createElement(_Header.default, null, "John Smith"), _react.default.createElement("br", null), "Email: John@Smith.com", _react.default.createElement("br", null), "Phone: 999-999-9999")), _react.default.createElement(_Menu.default, null, _react.default.createElement(_MenuItem.default, {
    size: "medium"
  }, "Menu Item"), _react.default.createElement(_MenuItem.default, {
    size: "medium"
  }, "Menu Item"), _react.default.createElement(_MenuItem.default, {
    size: "medium"
  }, "Menu Item"))));
});