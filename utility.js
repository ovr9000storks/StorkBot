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
const CONFIG = require("./config.json");


const reportText = "Please send this bug to my developer using the \"report\" command <3";

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} location an object that either contains coordinates or the name of a city or country
 * @summary Replies to the msg author with the time in the specified time zone
 */
function getTime(msg, location){
    const bing_key = process.env.BING_MAP_KEY;
    const axios = require('axios').default;

    //build the API call
    let url = ("https://dev.virtualearth.net/REST/v1/TimeZone/query=" + location + "?key=" + process.env.BING_MAP_KEY).replaceAll(" ", "%");

    //send the API call
    axios
        .get(url)
        .then(response=>{
            //no data on the location, will default to an error catch
            if(response.data.resourceSets[0].resources[0].timeZoneAtLocation.length == 0){
                msg.reply("It appears I have no data on that location...\nCheck for any typos or maybe try another location in the same time zone");
                return;
            }
            
            //get the necessary JSON data 
            let selectedZones = response.data.resourceSets[0].resources[0].timeZoneAtLocation[0].timeZone;
            let newLocation = response.data.resourceSets[0].resources[0].timeZoneAtLocation[0].placeName;

            //if the selected area has more than one time zone, skip
            //TODO: allow multiple time zones and sort west to east
            if(selectedZones.length > 1){
                //TODO: sort times from east to west
                msg.reply("This location has many timezones, please be more specific");
                return;
            }

            const zone = selectedZones[0];  //time zone information
            let textReply = "The current time in " + newLocation + " (" + selectedZones[0].abbreviation + ") is ... ";  //text to reply to the user with
            let localTime = zone.convertedTime.localTime.split("T")[1].split(":");  //array of hours, minutes and seconds
            let hour = parseInt(localTime[0]);  //convert string to number
            let minute = localTime[1];    //convert string to number
            let ampm = "A.M.";  //am/pm text

            //convert 24 hour to 12 hour time
            if(hour > 11){  //PM
                ampm = "P.M.";
                if(hour > 12)
                    hour -= 12;
            }else if(hour == 0){    //AM
                hour = 12;
            }

            //add the time to the reply string
            textReply += hour + ":" + minute + " " + ampm;
            msg.reply(textReply);

        })
        .catch(error=>{
            msg.reply("It appears an internal error occurred...\n" + reportText);
        })
}

//utility function for getTime(msg, location) to normalize for dalyight savings time
function getNormalizedUtcOffset(timezone){
    
    var momentZones = require("moment-timezone");
    //get the offset for the city or state
    const momentTimezone = momentZones.tz(timezone);
    if(!momentTimezone)
        return null;
    
    let offset = momentTimezone.utcOffset();
    if(momentTimezone.isDST())      //correct for daylight savings time
        offset-=60;

    return offset/60;
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


module.exports = {getTime};