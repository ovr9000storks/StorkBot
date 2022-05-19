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
require('dotenv').config(); //allow the bot script to be public, but private information to stay private
const Discord = require("discord.js");
const CONFIG = require("./config.json");
const BOTUTIL = require("./botutil.js");


//declare constants and instances
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"]});


//declare application events
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Goofy Goober Rock', {type:'LISTENING'});
})


//import {handleMessage} from "./botuitil.js";
client.on("messageCreate", msg => {
    var SERVER_CMD_OPERATOR = CONFIG.REQUIRED_OPERATOR;                         //TODO: change this to server's specific
    //Format:   "<SERVER_CMD_OPERATOR><COMMAND> <CMD_CONTENT>"
    //          "~userinfo @ovr9000storks#0001"

    if(msg.author === client.user || msg.content.trim().charAt(0) != SERVER_CMD_OPERATOR)
        return;
    
    //jQuery.getscript("./botutil.js", function(){ handleMessage(msg); });
    BOTUTIL.handleMessage(msg, SERVER_CMD_OPERATOR);
})

//log the bot into discord when all events are registered
client.login(process.env.DISCORD_TOKEN);
console.log('Everything is registered --> ready to rock');
