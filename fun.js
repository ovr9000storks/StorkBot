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

//text to reply with when an error or bug occurs
const reportText = "Please send this bug to my developer using the \"report\" command <3";

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} user the user specified to get the information about
 * @summary retrieves the <user>'s point balance 
 */
function retrieveUserBalance(msg, user){
    //TODO: implement when users.json is operational
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} boardScope user specified scope of what to include in the leaderboard
 * @summary 
 */
 function retrieveLeaderboard(msg, boardScope){
    //TODO: implement when users.json is operational
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} numDie number of dice to roll
 * @param {*} numSides number of sides the dice has
 * @summary rolls <numDie> die, each with <numSides> sides and returns the values to the user
 */
 function diceRoll(msg, numDie, numSides){
    //TODO: for loop that generates values from a range of [2,<numSides>] <numDie> times
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} selectedSide Either heads/H or tails/T
 * @param {*} betAmount an integer of the number of points the user bet
 * @summary Flips a coin (random 0-2, heads is >1), and compares it with the user's guess and awards the user if correct
 */
 function coinFlip(msg, selectedSide, betAmount){
    //TODO: random num must be 0-2 (0-1 for tails, >1 is heads), and award the user 2x their bet amount.
    //      bet amount and point awards will be fully implemented when users.json is fully operational
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} selectedRows integer number of rows the user has opts into utilizing
 * @param {*} betAmount integer number of points the user opts into betting
 * @summary rolls a simulated slot machine, then checks the selected rows if any award is to be given
 */
 function slotMachine(msg, selectedRows, betAmount){
    //TODO: create a slot machine simulation, actual total bet is <betAmount>*<selectedRows>, then award user points based on winning rows adjusted for betAmount
            //<betAmount> and points awards will be fully implemented when users.json is fully operational
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary simulate a deal or no deal game
 */
 function dealOrNoDeal(msg){
    //TODO: Since this game is a multiple message event, this requires users.json to be operational to function in the slightest
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} userAction action that the user wants to perform
 * @param {*} betAmount integer number of points the user opts into betting, only used when the game is started
 * @summary Utilizing two decks of cards, shuffles the large deck and simulates a game of blackjack, optionally either solo or against an AI. A multiplier is applied to awarded points if playing against an AI
 */
 function blackjack(msg, userAction, betAmount){
    //TODO: simulate a game of blackjack, create an AI to play against, award points to user if game is won
    //      <betAmount> and points awards will be fully implemented when users.json is fully operational
    //      Since this game is a multiple message event, this requires users.json to be operational to function in the slightest
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} playerDecision the option of either rock, paper, or scissors from the user
 * @param {*} betAmount integer number of points the user opts into betting, only used when the game is started
 * @summary Standard game of rock, paper, scissors. The user specifies their option and bet amount, and awarded points if the user beats the random bot selection
 */
 function rockPaperScissors(msg, playerDecision, betAmount){
    //TODO: randomly select rock, paper, or scissors, and award the user points if they win
    //      <betAmount> and points awards will be fully implemented when users.json is fully operational
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} guess the guessed character for the game
 * @summary classic game of hangman. Uses a pregenerated set of words and phrases for the user to guess
 */
 function hangman(msg, guess){
    //TODO: generate list of phrases, section them into topics like names, animals, movie phrases, etc. and check for characters in the phrase from the guess
    //      <betAmount> and points awards will be fully implemented when users.json is fully operational
    //      Since this game is a multiple message event, this requires users.json to be operational to function in the slightest
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @param {*} gameType user specified integer (1-4) used as a difficulty (increased possible ranges)
 * @param {*} guess integer number user specified guess for the game
 * @summary the user specifies their difficulty (possible range) and guess of what the randomly generated number will be
 */
 function guessTheNumber(msg, gameType, guess){
    //TODO: decide the ranges for the difficulties, then generate a random number in that range
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function dadJoke(msg){
    //TODO: research dad jokes and randomly select one
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function rule34(msg){
    //TODO: research where to obtain r34 content
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function waifuGenerator(msg){
    //TODO: research where to obtain waifu content
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function nftGenerator(msg){
    //TODO: research where to obtain random joke nft
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function magic8Ball(msg){
    //TODO: generate a list of magic 8 ball responses, then randomly select one
}

/**
 * 
 * @param {*} msg Discord Message Object
 * @summary 
 */
 function ouijaResponse(msg){
    //TODO: research where to obtain ouija responses 
}


module.exports = {retrieveUserBalance, retrieveLeaderboard, diceRoll, coinFlip, slotMachine, dealOrNoDeal, blackjack, rockPaperScissors, hangman, guessTheNumber, dadJoke, rule34, waifuGenerator, nftGenerator, magic8Ball, ouijaResponse};

