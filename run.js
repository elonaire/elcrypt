const elcrypt = require('./elcrypt.js');

var myPass = elcrypt.encryptPass('Aseneka95');

console.log(myPass);

var truePass = elcrypt.decryptPass(myPass);

console.log(truePass);