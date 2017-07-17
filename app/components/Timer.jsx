const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {  //1st step initalize
    return{
      count:0,
      countdownStatus:'paused'
    }
  },
  componentDidUpdate: function(prevProps,prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
        this.startTimer();
          break;
        case 'stopped':
        this.setState({
        count:0,
        countdownStatus:'paused'
        });
        case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }


  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count : newCount
      })
    },1000)
  },
  handleStatusChange: function(newStatus) { //status for controls
    console.log("HANDLE STATUS CHANGE");
    this.setState({
      countdownStatus: newStatus
    })
  },
  render: function() {
    var {count, countdownStatus} = this.state; //2nd step being able to use them as yours, 3rd put them in div controls and clock
    return(
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
      <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})


module.exports = Timer;

//clock
//button - start, stop, and clear
