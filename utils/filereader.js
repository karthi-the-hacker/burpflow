#!/usr/bin/env node

/**
 * burpflow
 * burpflow is a powerful tool for bug bounty hunters and penetration testers to load recon data into burp suite.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 


//lib and includes section 
const lineReader = require('line-reader');
const burp_flow = require('./brupflow');

class reader {
    constructor(wordlist) {
         lineReader.eachLine(wordlist, (line, last) => {
            new burp_flow.burpflow(line)
        });
    }
}
module.exports = {
    fileread: reader
}