/**
 * Copyright (C) 2022, Andrew Lauricella
 * This bot is not to be altered or used in any way without the author's permission
 * @author  Andrew Lauricella
 * @version 1
 * 
 * 
 * @summary Contains many functions for handling utility-style commands from discord users
 * 
 */

//call all require statements

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the time in the specified time zone
 */
function getTime(msg){
    //TODO: find a time zone service and reply to the user with the correct time
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the top google image result for a search
 */
function googleimage(msg){

}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary If the author of msg is an admin, set Google's safe search on or off
 */
function setSafeSearch(msg){
    if(!msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR"))
        msg.reply("You are not an admin");

    //TODO: set server config for google safesearch
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Handles the controls of the jukebox feature
 */
function jukebox(msg){
    //TODO: research what it takes to join a voice channel, get an audio stream from youtube and soundcloud
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the specified user's profile. 
 *          If none is given, provide the msg author's profile
 */
function displayProfile(msg){
    //TODO: Get info about a user and create a profile template to reply with
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the edited photo given in the command
 */
function editImage(msg){
    //TODO: find a relatively easy way of editing images, simple commands
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the translated message given in the command
 */
function translate(msg){
    //TODO: find a way to get a google translate API call
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} msgTokens msg.content tokenized and filtered
 * @summary If the msg author is an admin, sends a message to a specified channel with the speicified text
 * @format  ~announce <channel> <message>
 */
function sendAnnouncement(msg, msgTokens){
    if(!msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR"))
        msg.reply("You are not an admin");
    
    //TODO: detect if the specified channel exists, then create the message
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with the link to the bot's bug report and feature suggestion form
 */
function submitReport(msg){
    msg.reply("You can submit a bug report or suggest a feature here:\nhttps://forms.gle/CrTtzMRoYNzGYqSA9");
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Replies to the msg author with a 100x100px image of the specified color
 */
function getColor(msg){
    //TODO: use the image editor to create a 100x100 pixel solid image fo the desired color
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Joins the call of the msg's author and streams youtube or twitch content
 */
function shareVideo(msg){
    //TODO: determine if its even possible to have a bot share a screen, if not determine if a proprietary solution is possible
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary Sends a notification to a specified channel with the info of the message
 */
function reportUser(msg){
    //TODO: send a report to a a server specific channel with the desired information
    //TODO: create configs for allowing the reportUser function
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary If the msg author is an admin, sets the channel for the reportUser function to send information to
 */
function setUserReportReceiveChannel(msg){
    //TODO: determine if user is admin, then set the server config's report channel 
}