const React = require('react');
const UsersAPI = require('UsersAPI');
const UserSearchForm = require('UserSearchForm');
const GetUsers = require('GetUsers');

const Main = React.createClass({
  getInitialState: function () {
    return {
      users: [],
    };
  },

  searchUser: function (userData) {
    debugger;
    UsersAPI.getUser(userData).then((data) => {
      console.log(data);
    }, (err) => {
      console.log(data);
    });
  },

  retrieveUsers: function () {
    var _this = this;

    UsersAPI.getUsers().then((data) => {
      console.log(data);
      _this.setState({
        users: data.data,
      });
    });
  },

  render: function () {
    let { users } = this.state;

    function renderUsers() {
      if (users.length > 0) {
        debugger;
        return (
          <div>
            {users.map(function (user, index) {
              return <div key={index}>
                      <ul>
                        <li>Name: {user.name}</li>
                        <li>Age: {user.age}</li>
                        <li>Location: {user.location}</li>
                      </ul>
                    </div>;
            })}
            
          </div>
        );
      }
    };

    return (
      <div>
        <UserSearchForm onSearch={this.searchUser}></UserSearchForm>
        <GetUsers retrieve={this.retrieveUsers}></GetUsers>
        {renderUsers()}
      </div>
    );
  },
});

module.exports = Main;
