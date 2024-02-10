// setusername.js

// Import necessary modules and functions
const { nftBotClient } = require('./nft_bot.js');

// valid username regex
const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;

// Export the module
module.exports = {
    name: 'setusername',
    description: 'Set nanswap username to your user',

    // Execute function to handle 'setalerts' command
    async execute(message, args, client, config) {
        // Ignore messages from bots
        if (message.author.bot) return;

        // Check if the message starts with the 'setalerts' command
        if (message.content.startsWith(config.prefix + 'setusername'))  {
                // Check if there are enough arguments provided
                if (args.length < 1) {
                    return message.channel.send('Please provide valid username.');
                }

                // Extract username from arguments
                const nanswapUsername = args[0].toLowerCase();
                
                // Check if the provided username is valid
                if (!usernameRegex.test(nanswapUsername)) {
                    return message.channel.send('Invalid username format.');
                }
                
                // Send the username to the server
                nftBotClient.postUsernameData(nanswapUsername);
        }
    },
};
