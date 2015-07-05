'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _baseJs = require('./base.js');

var ReactArcSonic = (function (_ReactSonic) {
  function ReactArcSonic(props) {
    _classCallCheck(this, ReactArcSonic);

    _get(Object.getPrototypeOf(ReactArcSonic.prototype), 'constructor', this).call(this, props);
    this.path = this.props.path || [['arc', this.width / 2, this.height / 2, this.height / 3, 0, 360]];
  }

  _inherits(ReactArcSonic, _ReactSonic);

  return ReactArcSonic;
})(_baseJs.ReactSonic);

exports.ReactArcSonic = ReactArcSonic;