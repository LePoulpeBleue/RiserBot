const Discord = require('discord.js');
const bot = new Discord.Client();
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./userStats');
bot.on('ready', () => {
    bot.user.setPresence({game: {name: '<help'}})
    console.log(`Connecter en tant que ${bot.user.tag}!`);
});
bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    if (message.author.bot) return;
    var strmMessage = message.content.toLowerCase();
    var msgAuthor = message.author.username;
    var msgAuthorId = message.author.id;
    if(localStorage.getItem(msgAuthorId + ".json") === null){
        console.log("Identifiant créer");
        var data = {
            pseudo: msgAuthor,
            daily: 0,
            pancakes: 10
        }
        dataJSON = JSON.stringify(data);
        localStorage.setItem(msgAuthorId + ".json", dataJSON);
    }else{
        console.log("Identifiant deja créer");
        var dataJSON = localStorage.getItem(msgAuthorId + ".json");
        var data = JSON.parse(dataJSON);
        data = {
            pseudo: msgAuthor,
            daily: data.daily,
            pancakes: data.pancakes + 1
        }
        dataJSON = JSON.stringify(data);
        localStorage.setItem(msgAuthorId + ".json", dataJSON);
    }
    if(strmMessage.startsWith("<hour")){
        if(data.daily === new Date().getHours()){
            var pancake_embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}`)
                .setDescription("Vous avez deja effectuer cette commande cette heure ci!")
            message.channel.send({embed: pancake_embed});
        }else{
            var dataJSON = localStorage.getItem(msgAuthorId + ".json");
            var data = JSON.parse(dataJSON);
            data = {
                pseudo: msgAuthor,
                daily: new Date().getHours(),
                pancakes: data.pancakes + 100
            }
            dataJSON = JSON.stringify(data);
            localStorage.setItem(msgAuthorId + ".json", dataJSON);
            var pancake_embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}`)
                .setDescription("Vous avez gagner 100 pancakes!")
            message.channel.send({embed: pancake_embed});
        }
    }
        if(strmMessage.startsWith("<day")){
        if(data.daily === new Date().getDay()){
            var pancake_embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}`)
                .setDescription("Vous avez deja effectuer cette commande ce jour ci!")
            message.channel.send({embed: pancake_embed});
        }else{
            var dataJSON = localStorage.getItem(msgAuthorId + ".json");
            var data = JSON.parse(dataJSON);
            data = {
                pseudo: msgAuthor,
                hour: new Date().getHours(),
                day: new Date().getDay(),
                pancakes: data.pancakes + 1000
            }
            dataJSON = JSON.stringify(data);
            localStorage.setItem(msgAuthorId + ".json", dataJSON);
            var pancake_embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}`)
                .setDescription("Vous avez gagner 1000 pancakes!")
            message.channel.send({embed: pancake_embed});
        }
    }
    if(strmMessage.startsWith("<slot")){
        var dataJSON = localStorage.getItem(msgAuthorId + ".json");
        var data = JSON.parse(dataJSON);
        var luck = new getRandomInt(1);
        if(luck === 1){
            data = {
                pseudo: msgAuthor,
                hour: new Date().getHours(),
                day: new Date().getDay(),
                pancakes: data.pancakes -100
            }
            var pancake_embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .setDescription("Vous avez perdu 100 pancakes!")
        message.channel.send({embed: pancake_embed});
        }else{
            data = {
                pseudo: msgAuthor,
                hour: new Date().getHours(),
                day: new Date().getDay(),
                pancakes: data.pancakes +100
            }
            var pancake_embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .setDescription("Vous avez gagner 100 pancakes!")
        message.channel.send({embed: pancake_embed});
        }
        dataJSON = JSON.stringify(data);
        localStorage.setItem(msgAuthorId + ".json", dataJSON);
    }
    if(strmMessage.startsWith("<pancakes")){
        var pancake = data.pancakes;
        var pancake_embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`)
            .setDescription("Vous avez " + pancake + " !")
        message.channel.send({embed: pancake_embed});
    }
});
