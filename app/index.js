var React = require('react');
var ReactDOM = require('react-dom');
Ably.Realtime.Defaults.ENVIRONMENT = 'sandbox';
var realtime = new Ably.Realtime(AblyApiKey);

var channel = realtime.channels.get('ably-test');

var Hello = React.createClass({
  getInitialState: function () {
    return { message: "Waiting for ably test..." }
  },
  componentDidMount: function () {
    var thisComponent = this;
    channel.subscribe(function(message) {
      thisComponent.setState({ message: message.data })
    });
  },
  render: function () {
    return (
      <div> Status: { this.state.message } </div>
    );
  }
});

ReactDOM.render(<Hello />, document.getElementById('ably-status'));

channel.publish('example', 'Ably is working!');
