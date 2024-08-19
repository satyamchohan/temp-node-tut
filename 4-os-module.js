const os = require('os');

//info about user
const user = os.userInfo()
console.log(user)

//method returns the  system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

//info about current os system
const currentos ={
	Name: os.type(),
	Release: os.release(),
	TotalMem: os.totalmem(),
	FreeMem: os.freemem(),
}
console.log(currentos)