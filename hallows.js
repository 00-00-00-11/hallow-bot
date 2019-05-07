const application = require("./config.json");//gives link to the prefix of the bot
const Discord = require("discord.js");//access Discord.js
const bot = new Discord.Client({disableEveryone: true});//Defines Bot
const pokemons = require("./pokemon.json"); //Accesses Pokemon Database

bot.on("ready", async () => {    
    
    console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`)
    bot.user.setActivity("Spotify 📄", {type: "LISTENING"});
    bot.user.setStatus('dnd') 
    let timestamp = new Date()
    console.log("Bot Turned on at: " + timestamp)
    
});

bot.on("message", async message => {
    
    let prefix = application.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    //if(message.author.id === "574300620232589323") return;
    
    
    if(message.content.split(' ').indexOf('👀') !== -1) {
        if(message.author.id === "574300620232589323") {
            return;
        } else {
            message.channel.send(":eyes:")
        }
    }
    
    if(message.content.split(' ').indexOf('😐') !== -1) {
        if(message.author.id === "574300620232589323") {
            return;
        } else {
            message.channel.send(":neutral_face:")
        }   
    }
    
    if(message.content.split(' ').indexOf('<:thonk:574791112708063232>') !== -1) {
        if(message.author.id === "574300620232589323") {
            return;
        } else {
            message.channel.send("<:thonk:574791112708063232>")
        }   
    }
    
    if(message.content.split(' ').indexOf('<@309485087542476812>') !== -1) {
        if(Math.floor(Math.random() * 16) === 0) {
            message.channel.send("<:GWpingsock:574376380222013475>")
        }
    }
    
    if(message.content.split(' ').indexOf('p!duel') !== -1) {
        message.channel.send("I never lose.")
    }
    
    if(message.content.split(' ').indexOf('🔫') !== -1) {
        message.channel.send(":no_entry_sign: :shield: :no_entry_sign:\n:shield: :mouse2: :shield:\n:no_entry_sign: :shield: :no_entry_sign:")
    }
    
    if(message.content.split(' ').indexOf('🎉') !== -1) {
        message.channel.send(":tada:")
    }
    
    if(message.content.split(' ').indexOf('sleep') !== -1) {
        if(message.content.split(' ').indexOf('<@574300620232589323>') !== -1) {
            message.channel.startTyping();
            setTimeout(function(){
                message.channel.send("After I fight two more raiders.")
                message.channel.stopTyping();
            }, 1000)
        }
    }
    
    if(message.content.split(' ').indexOf('xD') !== -1) {
        if(message.author.id === "574300620232589323") {
            return;
        } else {
            message.channel.send("<:GWeulixexd:575463217036394506>")
        }
    }
    
    if(Math.floor(Math.random() * 26) === 0) {
        message.channel.send(":eyes:")
    }
    
    if(Math.floor(Math.random() * 31) === 0) {
        message.channel.send(":D")
    }
    
    if(Math.floor(Math.random() * 46) === 0) {
        message.channel.send("xD")
    }
    
    if(Math.floor(Math.random() * 51) === 0) {
        message.channel.send(":champagne: :mouse2: :tropical_drink: Party Time! :D")
    }
    
    if(Math.floor(Math.random() * 100) === 0) {
        message.channel.send("?afk <@402474988852084736> Get Pinged.")
    }
    
    if(Math.floor(Math.random() * 101) === 0) {
        message.channel.send("lmao")
    }
    
    if(message.content.split(' ').indexOf('typo') !== -1) {
        message.channel.startTyping()
        setTimeout(function() {
            message.channel.send('I never make typos. :triumph:')
        }, 1500)
        message.channel.stopTyping()
    }
    if(message.content.split(' ').indexOf('<@574300620232589323>') !== -1) {
        if(message.content.split(' ').indexOf('sleep') !== -1) {
            
        } else {
            message.channel.send("<:GWpingsock:574376380222013475>")
        }
    }
    if(message.content.split(' ').indexOf('typos') !== -1) {
        message.channel.startTyping()
        setTimeout(function() {
            message.channel.send('I never make typos. :triumph:')
        }, 1500)
        message.channel.stopTyping()
    }
    
    if(message.author.id === "365975655608745985") {
        if(message.embeds.length === 1) {
            if(message.embeds[0].description.includes('Guess the pokémon and type p!catch <pokémon> to catch it!')) {
                if(Math.floor(Math.random() * 101) !== 0) {
                    message.channel.startTyping()
                    setTimeout(function() {
                        message.channel.send("p!catch dud");
                    }, 1200)
                    message.channel.stopTyping();
                } else {
                    message.channel.startTyping()
                    setTimeout(function() {
                        var pokemonspawn = `${pokemons[Math.floor(Math.random() * pokemons.length)]}`
                        pokemonspawn.toLowerCase()
                        message.channel.send(`p!catch ` + pokemonspawn.toLowerCase())
                    }, 1400)
                    message.channel.stopTyping()
                }        
            }
        }
    }
    
    if(message.author.id === "544160570207633438") {
        if(message.embeds.length === 1) {
            if(message.embeds[0].title.includes("A mysterious pokémon appeared!")) {
                var embed15 = message.embeds[0]
                var pokedexid = embed15.image.url.charAt(56) + embed15.image.url.charAt(57) + embed15.image.url.charAt(58)
				var realid = Number(Number(pokedexid) - 1)
				
                if(Math.floor(Math.random() * 2) === 0) {
                    message.channel.startTyping()
                    setTimeout(function() {
                        var pokemonspawn2 = `${pokemons[realid]}`
                        pokemonspawn2.toLowerCase()
                        message.channel.send(embed15.description.charAt(6) + embed15.description.charAt(7) + embed15.description.charAt(8) + embed15.description.charAt(9) + embed15.description.charAt(10) + embed15.description.charAt(11) + " " + pokemonspawn2.toLowerCase() + ".")
                    }, 1600)
                    message.channel.stopTyping()
                    setTimeout(function() {
                        message.channel.startTyping()
                        setTimeout(function() {
                            message.channel.send("Nooo. :cry:")
                            message.channel.stopTyping()
                        }, 1200)

                    }, 1200)

                } else {
                    message.channel.startTyping()
                    setTimeout(function() {
                        message.channel.send(`${pokemons[realid]}. :unamused:`)
                    }, 1100)
                    message.channel.stopTyping()
                }
            }
           
        }
    }
    

});

bot.login(application.token);
