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
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  padding: .5rem;\n  width: ", ";\n  float: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Shape = function Shape(props) {
  switch (props.shape) {
    case "circle":
      return "50%";

    default:
      return "0";
  }
};

var Size = function Size(props) {
  switch (props.size) {
    case "thumbnail":
      return "5em";

    case "small":
      return "10em";

    default:
      return "auto";
  }
};

var IconWrapper = _styledComponents.default.img(_templateObject(), Shape, Size, function (props) {
  return props.float;
});

var Icon = function Icon(props) {
  return _react.default.createElement(IconWrapper, props, props.children);
};

Icon.defaultProps = {
  src: "https://dummyimage.com/250x250.jpg/612/ffffff",
  shape: "circle",
  float: "left"
};
var _default = Icon;
exports.default = _default;