const { log } = require('console');
const fs = require('fs');
const os = require('os');
fs.writeFileSync('dummy.txt', "DON'T STOP");
const name="ojha";
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
log(name);