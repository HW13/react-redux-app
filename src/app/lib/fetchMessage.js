require('isomorphic-fetch');

module.exports = (messageID) => new Promise((resolve) => {
  fetch(`//holden-test.herokuapp.com/messages/${messageID}/`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((message) => {
      resolve(message)
    })
})
    