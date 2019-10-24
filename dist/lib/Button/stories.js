'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _Button = require('./Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = {
  "Primary button (primary)": "primary",
  "Secondary button (secondary)": "secondary",
  "Danger button (danger)": "danger",
  "Ghost button (ghost)": "ghost"
};
var sizes = {
  Small: "small",
  Medium: "medium",
  Large: "large"
};

var props = {
  regular: function regular() {
    return {
      className: "",
      theme: (0, _addonKnobs.select)("Button theme (theme)", themes, "primary"),
      disabled: (0, _addonKnobs.boolean)("Disabled (disabled)", false),
      size: (0, _addonKnobs.select)("Button size (size)", sizes, "medium"),
      onClick: (0, _addonActions.action)("onClick"),
      onFocus: (0, _addonActions.action)("onFocus")
    };
  }
};

(0, _react3.storiesOf)("Buttons", module).addDecorator(_addonKnobs.withKnobs).add('with text', function () {
  var regularProps = props.regular();
  return _react2.default.createElement(
    _Button.Button,
    _extends({}, regularProps, { onClick: (0, _addonActions.action)('clicked') }),
    'Hello Button'
  );
});