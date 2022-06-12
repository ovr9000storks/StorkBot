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
            FUN.retrieveUserBalance(msg, 1);
            break;
        case "balance":
            cmdFound = true;
            FUN.retrieveUserBalance(msg, 1);
            break;
        case "lb":
            cmdFound = true;
            FUN.retrieveLeaderboard(msg, "global");
            break;
        case "leader": 
            cmdFound = true;
            FUN.retrieveLeaderboard(msg, "global");
            break;
        case "leaderboard":
            cmdFound = true;
            FUN.retrieveLeaderboard(msg, "global");
            break;
        case "roll":
            cmdFound = true;
            let numDie = 1;
            let numSides = 6;

            if(CMD_TOKENS.length > 1){
                try{ 
                    numDie = parseInt(CMD_TOKENS[1]);
                    if(CMD_TOKENS.length > 2)
                        numSides = parseInt(CMD_TOKENS[2]);
                }catch{
                    msg.reply("Either the specified # of die or sides was not a number...");
                    return;
                }
            }

            FUN.diceRoll(msg, numDie, numSides);
            break;
        case "flip":
            cmdFound = true;
            if(CMD_TOKENS.length == 1){
                msg.reply("You did not submit a guess. Try again");
                return;
            }

            if(CMD_TOKENS == 2){
                FUN.coinFlip(msg, CMD_TOKENS[1]);
            }else{
                try{
                    let bet = parseInt(CMD_TOKENS[2]);
                    FUN.coinFlipBet(msg, CMD_TOKENS[1], bet);
                }catch{
                    msg.reply("The bet amount was not valid. Try again");
                    return;
                }
                
            }
            break;
        case "dealnodeal":
            cmdFound = true;
            break;
        case "blackjack":
            cmdFound = true;
            break;
        case "rps":
            cmdFound = true;
            if(CMD_TOKENS.length == 1){
                msg.reply("You did not submit a guess. Try again");
                return;
            }
            FUN.rockPaperScissors(msg, CMD_TOKENS[1], 0);
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
        case "dance":
            cmdFound = true;
            msg.reply("https://i.imgur.com/Saem0uP.mp4");
            break;
        case "bathtime":
            cmdFound = true;
            msg.reply("https://i.imgur.com/qK2EwhH.mp4");
            break;
        case "sadness":
            cmdFound = true;
            msg.reply("https://c.tenor.com/UMEz2XNUFzYAAAAM/shoebill-bird.gif");
            break;
    }

    if(cmdFound)
        return;

    //check for utility CMDs first
    switch(CMD){
        case "profile":
            cmdFound = true;
            break;
        case "localtime":
            cmdFound = true;
            let location = "";
            if(CMD_TOKENS.length == 1){
                msg.reply("You did not enter where you want the local time for...\n" + HELP_INFO);
                return;
            }
            for(let i = 1; i < CMD_TOKENS.length; i++)
                location += CMD_TOKENS[i] + " ";
            UTILITY.getTime(msg, location.trim().replaceAll(" ", ""));
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