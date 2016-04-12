var React = require('react');
var ReactDOM = require('react-dom');
var channel;

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

$.get('/api_key', function(data) {
  Ably.Realtime.Defaults.ENVIRONMENT = 'sandbox';
  var realtime = new Ably.Realtime(data);
  channel = realtime.channels.get('ably-test');

  ReactDOM.render(<Hello />, document.getElementById('ably-status'));
  channel.publish('example', 'Ably is working!');
}).fail(function (jqXHR) {
  console.log('Error fetching API Key: ' + jqXHR.responseText);
});
