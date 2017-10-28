require('isomorphic-fetch');
//Still need to account for additional pages of messages
module.exports = () => new Promise((resolve) => {
  fetch('//holden-test.herokuapp.com/messages/')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((message) => {
      resolve(message.results)
    })
})
    