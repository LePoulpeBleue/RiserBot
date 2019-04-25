const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('Database.json')
const getJSON = require('get-json');
const db = low(adapter)

db.defaults({
    userStats : []
})
.write()

bot.on('ready', () => {
    bot.user.setPresence({game: {name: 'faire des pancakes'}})
    console.log(`Connecter en tant que ${bot.user.tag}!`);
});

bot.on('message', message => {
    if (message.author.bot) return;
    const TimeFormul = [
        "2 ^ 0",
        "4 x 2 - 7",
        "2 ^ 1",
        "3 x 3 / 3",
        "2 ^ 2",
        "2 x 2 + 1",
        "4 x 3 - 6",
        "1 x 3 + 4",
        "2 ^ 3",
        "9 x 9 / 9",
        "4 x 4 - 6",
        "2 x 5 + 1",
        "2 x 5 + 2",
        "5 x 2 + 3",
        "2 x 5 + 4",
        "5 x 2 + 5",
        "2 ^ 4",
        "5 x 2 + 7",
        "2 x 5 + 8",
        "5 x 2 + 9",
        "4 x 5 + 0",
        "5 x 4 + 1",
        "4 x 5 + 2",
        "5 x 4 + 3",
        "4 x 5 + 4",
        "5 x 4 + 5",
        "4 x 5 + 6",
        "5 x 4 + 7",
        "4 x 5 + 8",
        "5 x 4 + 9",
        "6 x 5 + 0",
        "5 x 6 + 1",
        "2 ^ 5",
        "6 x 5 + 3",
        "5 x 6 + 4",
        "6 x 5 + 5",
        "5 x 6 + 6",
        "6 x 5 + 7",
        "5 x 6 + 8",
        "6 x 5 + 9",
        "5 x 8 + 0",
        "8 x 5 + 1",
        "5 x 8 + 2",
        "8 x 5 + 3",
        "5 x 8 + 4",
        "8 x 5 + 5",
        "5 x 8 + 6",
        "8 x 5 + 7",
        "5 x 8 + 8",
        "8 x 5 + 9",
        "5 x 10 + 0",
        "10 x 5 + 1",
        "5 x 10 + 2",
        "10 x 5 + 3",
        "5 x 10 + 4",
        "10 x 5 + 5",
        "5 x 10 + 6",
        "10 x 5 + 7",
        "5 x 10 + 8",
        "10 x 5 + 9",
        "6 x 10 + 0"
    ];
    var strmessage = message.content.toLowerCase();
    if(strmessage.startsWith(".pancakes")){
        message.channel.send("https://i.imgur.com/4XHVGl7.png")
    }
    if(strmessage.startsWith(".meme")){
        getJSON("https://www.reddit.com/r/memes/top/.json?count=20", function(err, response){
          console.log(err);
          console.log(response);
          var link = response.data.children[getRandomInt(20)].data.url;
          message.channel.send(link);
        });
      }
    if(strmessage.includes("mdr")){
        message.channel.send("Sa fait pas rire guignole");
    }

    if(strmessage.includes("lol")){
        message.channel.send("Pff, lol je l'uitilisé en 1950");
    }

    if(strmessage.includes("xd")){
        message.channel.send("Retourne sur minecraft");
    }

    if(strmessage.includes("salut")){
        message.channel.send("Aurevoir");
    }

        if(strmessage.includes("bonjour")){
        message.channel.send("Aurevoir");
    }
 
    if (strmessage.includes("Lonner")){
        message.channel.send("Jack Lonner la tapette en mini austin");
    }
 
    if (strmessage.includes("Jack")){
        message.channel.send("Jack Lonner la tapette en mini austin");
    }

        if(strmessage.includes(".")){
        message.channel.send("Parle pas pour rien");
    }

        if(strmessage.includes("pancakes")){
        message.channel.send("Pancakes trop bon sa mère");
    }

        if(strmessage.includes("amine")){
        message.channel.send("Amine c'est le boss bande de folles");
    }

        if(strmessage.includes("elon musk")){
        message.channel.send("Roi des pancakes ma gueule");
    }
    if(strmessage.includes("tg")){
        message.channel.send("Eh toi ta gueule ouai!");
    }
    if(strmessage.startsWith(".ping")){
        message.channel.send(({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "PING :",
              value: "Le ping est de : " + Math.round(bot.ping) + ' ms.'
        }
       ],
       }
      }));
    }
    if(strmessage.startsWith(".pseudo")){
        const args = message.content.slice(8).trim().split();
        message.guild.members.get(bot.user.id).setNickname(args.toString());
        message.channel.send("C'est fait! :D");
        message.channel.send("Mon nouveau pseudo est : " + args);
    }
    if(strmessage.startsWith(".activité")){
        const args = message.content.slice(10).trim().split();
        bot.user.setActivity(args.toString());
        message.channel.send("C'est fait! :D");
        message.channel.send("Ma nouvelle activiter est : " + args);
    }
    if(strmessage.includes("jacob")){
        var replymessage = ["Oui.", "Non.", "Peut-être.", "Je ne sais pas."];
        message.channel.send(replymessage[getRandomInt(3)]);
    }
    if(strmessage.startsWith(".time")){
        var temps = new Date();
        var heure = temps.getHours();
        var minute = temps.getMinutes();
        message.channel.send({embed: {
            color: 0,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            title: "HEURE :",
            description: "Il est :",
            fields: [
                {
                    name: "Heure",
                    value: TimeFormul[heure + 2] 
                },
                {
                    name: "Minute",
                    value: TimeFormul[minute]
                }
            ],
            timestamp: "nop",
            footer: {
                icon_url: bot.user.avatarURL,
                text: "© Jacob"
              }
        }
      })
      }
      if(strmessage.startsWith("pierre")){
        var luck = getRandomInt(3);
        if(luck === 0){
          message.channel.send("Ciseau!");
          message.channel.send("J'ai perdu ;-;");
        }
        if(luck === 1){
          message.channel.send("Pierre!");
          message.channel.send("Égalité.");
        }
        if(luck === 2){
          message.channel.send("Feuille!");
          message.channel.send("J'ai Gagné :D");
        }
      }
      if(strmessage.startsWith("feuille")){
        var luck = getRandomInt(3);
        if(luck === 0){
          message.channel.send("Ciseau!");
          message.channel.send("J'ai Gagné :D");
        }
        if(luck === 1){
          message.channel.send("Pierre!");
          message.channel.send("J'ai perdu ;-;");
        }
        if(luck === 2){
          message.channel.send("Feuille!");
          message.channel.send("Égalité.");
        }
      }
      if(strmessage.startsWith("ciseau")){
        var luck = getRandomInt(3);
        if(luck === 0){
          message.channel.send("Ciseau!");
          message.channel.send("Égalité.");
        }
        if(luck === 1){
          message.channel.send("Pierre!");
          message.channel.send("J'ai Gagné :D");
        }
        if(luck === 2){
          message.channel.send("Feuille!");
          message.channel.send("J'ai perdu ;-;");
        }
      }
      if(strmessage.startsWith("bonjour" || "coucou" || "cc" || "slt" || "bjr" || "hello")){
        message.reply("Bonjour.");
      }
      if(strmessage.startsWith(".google")){
        const args = message.content.slice(8).trim().split();
        message.channel.send("http://www.google.com/search?q=" + args + "&btnI");
      }
      if(strmessage.includes("toshiri")){
          message.channel.send("https://thumbs.gfycat.com/RingedVacantEarthworm-size_restricted.gif");
      }
      if(strmessage === ".jacob"){
        bot.user.setAvatar("https://image.noelshack.com/fichiers/2019/06/6/1549718750-deepjacobicon.png");
        message.guild.members.get(bot.user.id).setNickname("Jacob");
        bot.user.setActivity("faire des pancakes");
    }
});

bot.login(process.env.BOT_TOKEN);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
