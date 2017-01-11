const React = require('react');

const UserSearchForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    let userData = {};
    userData.name = this.refs.name.value;
    userData.age = this.refs.age.value;

    this.refs.name.value = '';
    this.refs.age.value = '';
    this.props.onSearch(userData);
  },

  render: function () {
    return (
      <div>
        <h2>Find a user</h2>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter user name" ref="name"/>
          </div>
          <div>
            <input type="number" placeholder="Enter user age" ref="age"/>
          </div>
          <input type="submit">Find User</input>
        </form>
      </div>
    );
  },
});

module.exports = UserSearchForm;
