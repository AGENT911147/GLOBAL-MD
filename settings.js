

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.socialm = "GitHub: GlobalTechInfo" //ur github or insta name
global.location = "lagos, abuja" //ur location

//new
global.botname = 'LICKY_BOT2.0' //ur bot name
global.ownernumber = ['2349069922503'] //ur owner number, dont add more than one
global.ownername = '© AGENT911' //ur owner name
global.wagc = ""
global.themeemoji = '🪀'
global.wm = "Global Bot Inc."
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-XMD' //script link
global.packname = "Sticker By"
global.author = "classic lucky"
global.creator = "09118743413"
global.xprefix = '.'
global.premium = ["2349069922503"] // Premium User

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v9'
global.typereply = 'v1' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['⎆','ෆ','✎','⫹⫺','•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','☆','⊡','益','✯','⊙','☞','㉨','✪','➜']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});

