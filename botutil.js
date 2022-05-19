/**
 * Copyright (C) 2022, Andrew Lauricella
 * This bot is not to be altered or used in any way without the author's permission
 * @author  Andrew Lauricella
 * @version 1
 * 
 * 
 * @summary Contains some utility operations for the bot to handle various events
 * 
 */

const FUN = require("./fun.js");
const MODERATE = require("./moderate.js");
const UTILITY = require("./utility.js");

function handleMessage(msg, operator){
    //TODO: increment user message count

    const HELP_INFO = "Type \"" + operator + "help\" for more info.";

    var RAW_TOKENS = msg.content.split(" ");     //raw input, tokenized by spaces
    var CMD_TOKENS = [];                         //filtered tokens

    for(let i = 0; i < RAW_TOKENS.length; i++){        //filter out blank tokens
        var tok = RAW_TOKENS[i].trim();
        if(tok.length > 0){
            CMD_TOKENS.push(tok);
        }
    }

    const CMD_OPERATOR = CMD_TOKENS[0].charAt(0);                                    //first character of first token
    const CMD = CMD_TOKENS[0].substring(CMD_OPERATOR.length).toLowerCase();          //first token with all but the first character

    if(CMD_OPERATOR != operator){        //if the operator is not valid, stop the process
        msg.reply("operator not found");
        return;
    }

    var cmdFound = false;

    // TODO: create a function lookup table instead of switch statement
    //check for fun CMDs second
    switch(CMD){
        case "bal":
            cmdFound = true;
            break;
        case "roll":
            cmdFound = true;
            break;
        case "flip":
            cmdFound = true;
            break;
        case "dealnodeal":
            cmdFound = true;
            break;
        case "blackjack":
            cmdFound = true;
            break;
        case "rps":
            cmdFound = true;
            break;
        case "hangman":
            cmdFound = true;
            break;
        case "guessthenum":
            cmdFound = true;
            break;
        case "dadjoke":
            cmdFound = true;
            break;
        case "r34":
            cmdFound = true;
            break;
    }

    if(cmdFound)
        return;

    //check for utility CMDs first
    switch(CMD){
        case "profile":
            cmdFound = true;
            break;
        case "timezone":
            cmdFound = true;
            break;
        case "googleimage":
            cmdFound = true;
            break;
        case "jukebox":
            cmdFound = true;
            break;
        case "theatre":
            cmdFound = true;
            break;
        case "theater":
            cmdFound = true;
            break; 
    }

    if(cmdFound)
        return;

    //check for moderation CMDs third
    switch(CMD){
        case "autofilter":
            cmdFound = true;
            break;
        case "delete":
            cmdFound = true;
            break;
        case "kick":
            cmdFound = true;
            break;
        case "unkick":
            cmdFound = true;
            break;
        case "ban":
            cmdFound = true;
            break;
        case "unban":
            cmdFound = true;
            break;
        case "mute":
            cmdFound = true;
            break;
        case "unmute":
            cmdFound = true;
            break;
        case "role":
            cmdFound = true;
            break;
        case "setlogchat":
            cmdFound = true;
            break;
        case "setcommandtoken":
            cmdFound = true;
            break;
    }

    if(cmdFound)
        return;

    //check for the help CMD
    if(CMD === "help"){
        msg.reply("You can find notation for all commands here:\nhttps://bit.ly/StorkBot");
        return;
    }
    
    //if no CMD is found, give a little help
    msg.reply("Command not found. " + HELP_INFO);
}


//define the exports to allow use of functions in bot.js
module.exports = {handleMessage};