const feroms = require('fero-ms')
const Command = require('../Structures/Command.js')
const Discord = require('discord.js')
const hello = require('./hello.js')






module.exports = new Command({
    name: "8ball",
    description: "8 ball game",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

const responses = [
    'It is certain',
    'Without a doubt',
    'You may rely on it',
    'Yes definitel',
    'It is decidedly so',
    'As I see it, yes', 
    'Most likely',
    'Yes',
    'Outlook good',
    'Signs point to yes',

    'Reply hazy try again',
    'Better not tell you now',
    'Ask again later',
    'Cannot predict now',
    'Concentrate and ask again',

    'Don’t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful',
    'My reply is no'
]

function getResponce(){
     return responseToUse = responses[Math.floor(Math.random() * responses.length)];
     
}
getResponce()
message.reply(responseToUse);

}})