"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: .5em;\n  width: ", ";\n  border-top-style: ", ";\n  border-right-style: ", ";\n  border-bottom-style: ", ";\n  border-left-style: ", ";\n  border-width: ", "px;\n  border-color: ", ";\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.borderT;
}, function (props) {
  return props.borderR;
}, function (props) {
  return props.borderB;
}, function (props) {
  return props.borderL;
}, function (props) {
  return props.borderWidth;
}, function (props) {
  return props.borderColor;
});

var Menu = function Menu(props) {
  return _react.default.createElement(MenuWrapper, props, props.children);
};

Menu.defaultProps = {
  width: "15%",
  borderT: "solid",
  borderR: "none",
  borderB: "solid",
  borderL: "none",
  borderWidth: "1",
  borderColor: "#d9d9d9"
};
var _default = Menu;
exports.default = _default;