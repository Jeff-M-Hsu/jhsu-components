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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: auto;\n  border: ", ";\n  padding-right: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: .5rem;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var cardSize = function cardSize(props) {
  switch (props.size) {
    case "small":
      return "30%";

    case "medium":
      return "40%";

    case "large":
      return "50%";

    default:
      return "30%";
  }
};

var borderStyle = function borderStyle(props) {
  switch (props.border) {
    case "none":
      return "none";

    default:
      return "solid #d9d9d9 1px";
  }
};

var CardContainer = _styledComponents.default.div(_templateObject());

var CardWrapper = _styledComponents.default.div(_templateObject2(), borderStyle);

var Card = function Card(props) {
  return _react.default.createElement(CardContainer, null, _react.default.createElement(CardWrapper, props, props.children));
};

Card.defaultProps = {
  size: "small",
  border: ""
};
Card.propTypes = {
  size: _propTypes.default.string
};
var _default = Card;
exports.default = _default;