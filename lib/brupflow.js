const request = require('request');

class burp {
    constructor(url) {
              const proxyUrl = 'http://127.0.0.1:7777'; // change this to your Burp Suite proxy address
              const requestOptions = {
                method: 'GET',
                proxy: proxyUrl,
                rejectUnauthorized: false
              };
                requestOptions.url = url;
                request(requestOptions, (error, response, body) => {
                  console.log(`Sent to Burp Suite request to ${url}`);
              });
    }
  }


module.exports = {
    burpflow: burp
}