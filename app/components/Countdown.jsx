const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
var Countdown = React.createClass({
  getInitialState: function() {
    return{count: 0};
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds //set count object
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
