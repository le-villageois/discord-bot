const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on("ready", async () =>{
    console.log("Le bot est prêt")
    bot.user.setStatus("dnd")
    bot.user.setActivity("Quelque chose")


})

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('819207805533421598').send(`Bienvenue ${member} sur le serveur`);
    member.roles.add('819209306045284352');

})

bot.on("message", message =>{
    if(message.content.startsWith("/clear")){
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(isNaN(args[0]) && args[1] >= 1 && args[1] <= 99){
                    

                    message.channel.bulkDelete(args[1]);
                    message.channel.send(`Vous avez supprimer ${args[1]} messages`)
                }
                else{
                    message.channel.send(`Vous devez entrer une valeur entre 1 et 99!`)
                }
            }
            else{
                message.channel.send(`Vous devez entrer un nombre de message a supprimer!`)
            }
        }
        else{
            message.channel.send(`Vous n'avez pas les permissions pour faire celà!`)
        }
        
    }

    
    if(message.content.includes("fdp")){
    message.author.send("Attention, un tel language n'est pas accepté sur ce serveur !")
    }
    if(message.content.includes("connard")){
        message.author.send("Attention, un tel language n'est pas accepté sur ce serveur !")
        }
    
})



bot.login(process.env.TOKEN);
