'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  padding: .25em 1em;\n  margin: .5em 1em;\n  font-size: ', ';\n  background: ', ';\n  border: ', ';\n  color: ', ';\n  opacity: ', ';\n'], ['\n  border-radius: 3px;\n  padding: .25em 1em;\n  margin: .5em 1em;\n  font-size: ', ';\n  background: ', ';\n  border: ', ';\n  color: ', ';\n  opacity: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var background = function background(props) {
  switch (props.theme) {
    case "primary":
      return "#4285F4";
    case "danger":
      return "#DB4437";
    case "secondary":
    case "ghost":
      return "transparent";
    default:
      return "#4285F4";
  }
};

var border = function border(props) {
  switch (props.theme) {
    case "secondary":
      return "1px solid black";
    default:
      return "none";
  }
};

var textColor = function textColor(props) {
  switch (props.theme) {
    case "primary":
    case "danger":
      return "white";
    default:
      return "black";
  }
};

var fontSize = function fontSize(props) {
  switch (props.size) {
    case "small":
      return ".8em";
    case "medium":
      return "1em";
    case "large":
      return "1.2em";
    default:
      return "1em";
  }
};

var ButtonWrapper = _styledComponents2.default.button(_templateObject, fontSize, background, border, textColor, function (props) {
  return props.disabled ? ".5" : "1";
});

var Button = exports.Button = function Button(props) {
  return _react2.default.createElement(
    ButtonWrapper,
    props,
    props.children
  );
};

Button.defaultProps = {
  theme: "primary",
  border: "primary",
  size: "medium"
};

Button.propTypes = {
  type: _propTypes2.default.string
};