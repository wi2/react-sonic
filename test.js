var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('assert');

var SonicReact = require('./index.js');
var SimpleSonic = SonicReact.ReactSonic;
var ArcSonic = SonicReact.ReactArcSonic;

if (typeof document === 'undefined') {
  var jsdom = require("node-jsdom").jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
  global.navigator = {userAgent: ''};
}


describe('The sonic component', function() {

  describe('when no props are given', function() {
    var simple, simpleMore, arc;

    before(function(done) {
      simple = TestUtils.renderIntoDocument(
        <SimpleSonic />
      );
      simpleMore = TestUtils.renderIntoDocument(
        <SimpleSonic className="more" fillColor="#FF0000" width="50" height="50" />
      );
      arc = TestUtils.renderIntoDocument(
        <ArcSonic fillColor="#FF00FF" width="50" height="50" />
      );
      done()
    });

    after(function(done) {
      React.unmountComponentAtNode(document.body);
      setTimeout(done);
    });

    it('should have a classname equal to "loader"', function() {
      var className = TestUtils.scryRenderedDOMComponentsWithClass(simple, 'loader')
      assert.equal(className.length, 1);
    });
    it('should have a classname equal to "more"', function() {
      var className = TestUtils.scryRenderedDOMComponentsWithClass(simpleMore, 'more')
      assert.equal(className.length, 1);
    });

    it('should have a classname equal to "loader"', function() {
      var className = TestUtils.scryRenderedDOMComponentsWithClass(arc, 'loader')
      assert.equal(className.length, 1);
    });

  });


});
