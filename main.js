const Discord = require('discord.js') // подключение библиотеки                  Видео про бота https://youtu.be/1lzPIhTaPDY
const client = new Discord.Client() // создание клиента

client.on('ready', () =>{ // ивент, когда бот запускается https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
    client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
    console.log(`Привет! ${client.user.tag} запустился!`) // информация в консоль про успешный запуск
})


client.on('messageDelete', message =>{ // ивент, когда удаляется любое сообщение с сервера https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
    let embed = new Discord.MessageEmbed()
    .setTitle('Message has been deleted!')
    .setColor('RANDOM')
    .addField(`Deleted message:`, message.content, true)
    .addField("User:",`${message.author.tag} (${message.author})`,true)
    .addField("Channel:", `${message.channel}`, false)
    .setFooter(' - ',`${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt);
  client.channels.cache.get("939359518117212230").send(embed); // айди вашего канала с логами
})

client.on('guildMemberRemove', member => { // ивент, когда пользователь выходит с сервера https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`the user has left the server`)
    .addField('User:', member.user)
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('939359518117212230').send(embed) // айди вашего канала с логами
  })

var interval = setInterval(function () { change(); }, 20000  ); // время обновления в миллисекундах

client.login('OTM5MzU4NzY4ODg4NjgwNTA4.Yf3sBg.pvV3V0-mYxT6RlXlWFeLdsIDbaE') // токен вашего бота
