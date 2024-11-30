
// richiamo la funzione del nome tramite il require
const nome = require(`./name`);
console.log(nome);

// Uso la funzione del nome 

 const nomeresult = nome.nomeFull("Mario"," Rossi");
console.log(nomeresult);

// richiamo la funzione segli hobbie tramite il require

const hobbyes = require(`./hobbie`);
console.log(hobbyes);

// Uso la funzione degli hobbie
const hobbyesResult = hobbyes.hobbyesFull("calcio","tennis","nuoto");
console.log(hobbyesResult);




