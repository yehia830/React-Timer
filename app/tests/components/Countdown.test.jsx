const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown' , () => {
  it('Countdown should exist' ,() => {
      expect(Countdown).toExist();
  });
  describe('handleSetCountdown',() => {
    it('Countdown state to started and countdown ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);

    })
  })
  describe('handleSetCountdownunder0',() => {
    it('Countdown state does not go past 0 ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);

    })
  })
});
