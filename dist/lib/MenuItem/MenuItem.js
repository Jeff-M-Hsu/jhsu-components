"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  color: #c9c9c9;\n  :hover{\n    color: #4285F4;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: .5em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var MenuRow = _styledComponents.default.div(_templateObject());

var MenuItemWrapper = _styledComponents.default.a(_templateObject2(), fontSize);

var MenuItem = function MenuItem(props) {
  return _react.default.createElement(MenuRow, null, _react.default.createElement(MenuItemWrapper, props, props.children));
};

MenuItem.defaultProps = {
  size: "medium"
};
MenuItem.propTypes = {
  size: _propTypes.default.string
};
var _default = MenuItem;
exports.default = _default;