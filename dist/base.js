'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactSonic = (function (_React$Component) {
  function ReactSonic(props) {
    _classCallCheck(this, ReactSonic);

    _get(Object.getPrototypeOf(ReactSonic.prototype), 'constructor', this).call(this, props);
    this.state = {};
    this.width = this.props.width || 50;
    this.height = this.props.height || 50;
    this.path = this.props.path || [['line', 10, this.height / 2, this.width - 10, this.height / 2]];
  }

  _inherits(ReactSonic, _React$Component);

  _createClass(ReactSonic, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof Sonic !== 'undefined') {
        var square = new Sonic({
          width: this.width,
          height: this.height,
          stepsPerFrame: this.props.stepsPerFrame || 4,
          trailLength: this.props.trailLength || 0.6,
          pointDistance: this.props.pointDistance || 0.01,
          fps: this.props.fps || 20,
          backgroundColor: this.props.backgroundColor || '#272822',
          fillColor: this.props.fillColor || '#AAA',
          path: this.path || null,
          step: this.step || null,
          setup: this.setup || null
        });
        this.refs.loader.getDOMNode().appendChild(square.canvas);
        square.play();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { ref: 'loader', className: this.props.className || 'loader', title: this.props.title || '' });
    }
  }]);

  return ReactSonic;
})(_react2['default'].Component);

exports.ReactSonic = ReactSonic;