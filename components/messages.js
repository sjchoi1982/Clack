var React = require('react')
var ReactDom = require('react-dom')

var Messages = React.createClass({
  render: function() {
    if(!this.props.messages) {return null;}
    var messageList = this.props.messages.map(function(message, i) {
      return (
        <div key={i} className="message">
          <a href={"https://twitter.com/" + message.name + "/"} target="_blank"><img src={"https://twitter.com/" + message.name + "/profile_image"} className="message_profile-pic" /></a>
                  <a href={"https://twitter.com/" + message.name + "/"} target="_blank" className="message_username">{message.name}</a>
          <span className="message_timestamp">{message.time.toLocaleTimeString()}</span>
          <span className="message_content" dangerouslySetInnerHTML={{__html: message.text}}></span>
        </div>
      )
    });
    return (
      <div id="message-list">
        <div className="time-divide">
          <span className="date">

          </span>
        </div>
        {messageList}
      </div>
    );
  }
});

module.exports = Messages;
