const Discord = require('discord.js')
const readline = require('readline-sync')

var name = readline.question('What is your name? ')

/*
 1. Right click on any discord channel that you have permission
 2. Click edit channel
 3. go to integrations
 4. Create webhook
 5. Copy webhook URL

 https://discordapp.com/api/webhooks/76693545646546545445346/fUwCWdGk1An9SIgzUiI8Kfe3aSigkE1M__-9sdfsdfsdfqw321312fdrot4
                                      [ THIS IS YOUR ID ]    [  TOKEN  ]

 This is a sample discord webhool  url do not use!                                      
*/

/* Accepts two params ID and Token */
const webhook = new Discord.WebhookClient('', '')

/* Sends the message to your webhook */
webhook.send(name)