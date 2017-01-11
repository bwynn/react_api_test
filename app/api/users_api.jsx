const axios = require('axios');

module.exports = {
  getUsers: () => {
    return axios.get('/get_users').then((res) => {
      return res;
    }, (err) => {
      throw new Error(res);
    });
  },

  getUser: (data) => {
    debugger;
    return axios.post('/get_user', { data }).then((res) => {
      return res;
    }, (err) => {
      throw new Error(res);
    });
  },
};
