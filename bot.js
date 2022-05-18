/**
 * Copyright (C) 2022, Andrew Lauricella
 * This bot is not to be altered or used in any way without the author's permission
 * @author  Andrew Lauricella
 * @version 1
 * 
 * 
 * @summary StorkBot is a Discord bot that gives moderation, utility, and fun operations to a discord server
 * 
 */


//add require and import statements
const Discord = require("discord.js");
require('dotenv').config(); //allow the bot script to be public, but private information to stay private
const CONFIG = require("./config.json");

//declare constants and instances
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"]});
var MAX_TOKENS = 20;
const HELP_INFO = "Type \"" + REQUIRED_OPERATOR + "help\" for more info.";


//declare application events
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
    var REQUIRED_OPERATOR = CONFIG.REQUIRED_OPERATOR;
    //Format:   "<REQUIRED_OPERATOR><COMMAND> <CMD_CONTENT>"
    //          "~userinfo @ovr9000storks#0001"

    if(msg.author === client.user)
        return;

    var RAW_TOKENS = msg.content.split(" ");     //raw input, tokenized by spaces
    var CMD_TOKENS = [];                                //filtered tokens
    
    //if there are less tokens in the message than MAX_TOKENS, reduce MAX_TOKENS
    if(RAW_TOKENS.length < MAX_TOKENS)
        MAX_TOKENS = RAW_TOKENS.length;

    for(let i = 0; i < MAX_TOKENS; i++){        //filter out blank tokens
        var tok = RAW_TOKENS[i].trim();
        if(tok.length > 0){
            CMD_TOKENS.push(tok);
        }
    }

    const CMD_OPERATOR = CMD_TOKENS[0].charAt(0);                                    //first character of first token
    const CMD = CMD_TOKENS[0].substring(CMD_OPERATOR.length).toLowerCase();          //first token with all but the first character

    if(CMD_OPERATOR != REQUIRED_OPERATOR){        //if the operator is not valid, stop the process
        msg.reply("operator not found");
        return;
    }

    //check for fun CMDs second
    switch(CMD){
        case "bal":

            return;
    }

    //check for utility CMDs first
    switch(CMD){
        case "profile":
            if(CMD_TOKENS.length < 2){
                msg.reply("Missing user info. " + HELP_INFO);
                return;
            }
            
    }

    //check for moderation CMDs third
    switch(CMD){

    }

    //check for the help CMD
    if(CMD === "help"){
        msg.reply("TODO");
        return;
    }
    
    //if no CMD is found, give a little help
    msg.reply("Command not found. " + HELP_INFO);
})

//log the bot into discord when all events are registered
client.login(process.env.DISCORD_TOKEN);
console.log('Logged in --> ready to rock');