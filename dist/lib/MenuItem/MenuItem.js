'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: .5rem;\n'], ['\n  padding: .5rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding-right: ', 'em;\n  font-size: ', ';\n  color: #d9d9d9;\n  :hover{\n    color: #4285F4;\n  }\n'], ['\n  padding-right: ', 'em;\n  font-size: ', ';\n  color: #d9d9d9;\n  :hover{\n    color: #4285F4;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var MenuRow = _styledComponents2.default.div(_templateObject);
var MenuItemWrapper = _styledComponents2.default.a(_templateObject2, function (props) {
  return props.padding;
}, fontSize);

var MenuItem = function MenuItem(props) {
  return _react2.default.createElement(
    MenuRow,
    null,
    _react2.default.createElement(
      MenuItemWrapper,
      props,
      props.children
    )
  );
};

exports.default = MenuItem;