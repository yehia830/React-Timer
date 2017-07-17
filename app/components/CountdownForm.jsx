const React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault(); //prevents full refresh
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)){ //regular expression check for stuff like phone numbers
      this.refs.seconds.value ='';
      this.props.onSetCountdown(parseInt(strSeconds,10));
    }
  },
  render:function() {
    return(
      <div>
        <form ref="ref" onSubmit={this.onSubmit} className='Countdown-form'>
            <input type='text' ref='seconds' placeholder='Enter time in seconds'></input>
            <button className='button expanded'>Start</button>
        </form>
      </div>
    )
  }
});
module.exports = CountdownForm;
