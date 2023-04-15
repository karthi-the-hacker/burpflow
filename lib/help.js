#!/usr/bin/env node

/**
 * burpflow
 * burpflow is a powerful tool for bug bounty hunters and penetration testers to load recon data into burp suite.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 

const { boolean } = require("yargs");
//lib and includes section 
require("os").userInfo().username
module.exports = {
    helpmenu: function() {
       var argv = require('yargs/yargs')(process.argv.slice(2))
          .usage('\n\n \x1b[30;1m$\x1b[0m \x1b[32;1mburpflow \x1b[36;1m[option]\n\n \x1b[37;42;1mUsage:\x1b[0m $0 \x1b[33;1m[options]\x1b[30;1m')
          .version('version', '1.0.1').alias('version', 'V')
          .options({
            help: {
              alias: 'h',
              description: "Show help",
              requiresArg: true,
              required: false
            },
            
            url: {
              alias: 'u',
              description: "url to load into burp suite",
              requiresArg: true,
              required: true
            },
            
            list: {
              alias: 'l',
              description: "file containing list of url ",
              requiresArg: true,
              required: false
            }
          })
          .argv;
        console.log('Inspecting options');
        console.dir(argv);
        console.log("input:", argv.input);
        console.log("output:", argv.output);
    },
     helpintro: function() {
cyan='\e[1;36m%s\e[0m\n'
console.log("  \n\n\x1b[36;1m👋 Hey \x1b[37;1m"+require("os").userInfo().username+" \x1b[36;1m\n");
console.log(" .-----------------------------.           ");
console.log(" |  Tool   : BurpFlow 🎯       |           ");
console.log(" |  Author : \x1b[32;1m@karthithehacker🎖️\x1b[36;1m |           ");
console.log(" |   No place for 127.0.0.1    |           ");
console.log(" '-----------------------------'           ");
console.log("                 ^      (\\_/)    ");
console.log("                 '----- (O.o)    ");
console.log("                        (> <)    ");
      console.log("\n\x1b[37;1mBurpFlow  v0.0.1 \x1b[30;1m\nBurpFlow is a powerful tool for bug bounty hunters and penetration testers to load recon data into burp suite.")
     }
};