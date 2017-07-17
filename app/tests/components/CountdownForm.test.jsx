const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm' , () => {
    it('should exist', () => {
      expect(CountdownForm).toExist();
    });
    it('should call onSetCountdown if valid seconds entered', () => {
      var spy = expect.createSpy(); //create spy
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); //render spy into the document
      var $el = $(ReactDOM.findDOMNode(countdownForm)); //find the info from the frontend using jquery

      countdownForm.refs.seconds.value = '109'; //target the refs in the countdownForm
      TestUtils.Simulate.submit($el.find('form')[0]); //simulate the submit button with anything with form, with the first dom node
      expect(spy).toHaveBeenCalledWith(109); //simulate you putting the 109 in the form
    });
    it('should not call onSetCountdown if non valid info put in', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = 'a';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });



});
