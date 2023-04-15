#!/usr/bin/env node

/**
 * burpflow
 * burpflow is a powerful tool for bug bounty hunters and penetration testers to load recon data into burp suite.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 


const help = require('./utils/help');
const fileread = require('./utils/filereader');
const BurpFlow = require('./utils/brupflow')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
//variable and object declariation section
const argv = yargs(hideBin(process.argv)).argv 
//variable and object declariation section

// used to check the argument parsed data is empty or not 
if( argv.h == true ){
   help.helpintro();
   help.helpmenu();
    return; 
}
//used to check for valid input data and syntax 
if(argv.l != null || argv.list != null){
     if(argv.list == true || argv.l == true){
        help.helpintro();
        return;
     }
     else{
        new fileread.fileread(argv.l || argv.list)
        return
     }
}
if(argv.u == null || argv.u == true ){
    if(argv.url == null || argv.url == true){
        help.helpintro();
        return; 
    }
}

if(argv.l == null && argv.l == true ){
    if(argv.list == null || argv.list == true){
        help.helpintro();
        return; 
    }
}
//program execution part and calling the constructor class 
new BurpFlow.burpflow(argv.u || argv.url,)


//
