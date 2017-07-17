const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exisit', () => {
    expect(Controls).toExist();
  });
  describe('render', () => {
    it('should pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
  });
  describe('render1', () => {
    it('should start when pause', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});
