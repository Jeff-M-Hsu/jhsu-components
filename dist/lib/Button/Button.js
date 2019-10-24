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
  var data = _taggedTemplateLiteral(["\n  border-radius: 3px;\n  padding: .25em 1em;\n  margin: .5em 1em;\n  font-size: ", ";\n  background: ", ";\n  border: ", ";\n  color: ", ";\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var ButtonWrapper = _styledComponents.default.button(_templateObject(), fontSize, background, border, textColor, function (props) {
  return props.disabled ? ".5" : "1";
});

var Button = function Button(props) {
  return _react.default.createElement(ButtonWrapper, props, props.children);
};

Button.defaultProps = {
  theme: "primary",
  border: "primary",
  size: "medium"
};
Button.propTypes = {
  type: _propTypes.default.string
};
var _default = Button;
exports.default = _default;