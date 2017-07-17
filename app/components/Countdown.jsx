const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

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
        case 'stopped':
        this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () { //right before components get visually removed
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval (() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({countdownStatus:'stopped'})
      }
    },1000);

  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds, //set count object
      countdownStatus: 'started' //start the countdown process
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  },

  render: function() {
    var {count, countdownStatus} = this.state; //get count object from this component
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }else{
      return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
