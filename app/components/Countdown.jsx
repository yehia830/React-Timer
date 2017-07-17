const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
var Countdown = React.createClass({
  getInitialState: function() {
    return{
      count: 0,
      countdownStatus: 'stopped'}; //maintain current status
  },
  componentDidUpdate: function (prevProps,prevState) { //specific method that houses previous props and states
    if(this.state.countdownStatus !== prevState.countdownStatus){  //check if new state same as previous one
      switch (this.state.countdownStatus) { 
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval (() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });


    },1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds, //set count object
      countdownStatus: 'started' //start the countdown process
    });
  },
  render: function() {
    var {count} = this.state; //get count object from this component
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
