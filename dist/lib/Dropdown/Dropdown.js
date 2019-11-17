"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  display: ", ";\n  padding: .5em;\n  background-color: white;\n  box-shadow: 0 2px 12px rgba(0,0,0,0.175); \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  margin-bottom: -5px;\n  margin-left: auto;\n  margin-right: auto;\n  display: ", ";\n  transform: rotate(45deg);\n  height: ", ";\n  width: ", ";\n  background-color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin: 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 60%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: block;\n  min-width: 150px;\n  float: right;\n  margin-right: 2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownWindow = _styledComponents.default.div(_templateObject());

var Divider = _styledComponents.default.div(_templateObject2());

var DropdownIcon = _styledComponents.default.img(_templateObject3());

var DropdownArrow = _styledComponents.default.span(_templateObject4(), function (props) {
  return props.isOn ? "block" : "hidden";
}, function (props) {
  return props.isOn ? "10px" : "0";
}, function (props) {
  return props.isOn ? "10px" : "0";
});

var DropdownContent = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.isOn ? "block" : "none";
});

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState(function (state) {
        return {
          toggle: !state.toggle
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      if (e && e.relatedTarget) {
        e.relatedTarget.click();
        console.log("target clicked");
      }

      _this.setState({
        toggle: false
      });
    });

    _this.state = {
      toggle: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleHide = _this.handleHide.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(DropdownWindow, null, _react.default.createElement(Divider, null, _react.default.createElement(DropdownIcon, {
        src: props.src,
        onClick: this.handleClick,
        onBlur: this.handleHide,
        tabIndex: 0
      }), _react.default.createElement(DropdownArrow, {
        isOn: this.state.toggle
      })), _react.default.createElement(DropdownContent, {
        isOn: this.state.toggle
      }, props.children));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

var _default = Dropdown;
exports.default = _default;