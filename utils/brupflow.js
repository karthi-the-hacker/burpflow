#!/usr/bin/env node

/**
 * burpflow
 * burpflow is a powerful tool for bug bounty hunters and penetration testers to load recon data into burp suite.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 

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