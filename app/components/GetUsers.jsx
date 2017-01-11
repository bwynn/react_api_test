const React = require('react');

const GetUsers = React.createClass({
  findUsers: function (e) {
    e.preventDefault();

    this.props.retrieve();
  },

  render: function () {
    return (
      <div>
        <h2>Find all Users</h2>
        <button onClick={this.findUsers}>Find Users</button>
      </div>
    );
  },
});

module.exports = GetUsers;
