"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t@font-face{\n\t\tfont-family: \"Roboto\";\n\t\tsrc: url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n\t}\n  * {\n    font-family: \"Roboto\", Helvetica, sans-serif !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyle;
exports.default = _default;