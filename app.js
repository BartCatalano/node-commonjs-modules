
// richiamo la funzione del nome tramite il require
const nome = require(`./name`);

// richiamo la funzione segli hobbie tramite il require

const hobbyes = require(`./hobbie`);

// creo la funzione finale

function finalProfile (){
    // uso la funzione nome
    const nomeresult = nome.nomeFull("firstname"," lastname");
   // uso la funzione hobby
    const hobbyesResult = hobbyes.hobbyesFull("hobbyOne"," hobbyTwo"," hobbyThree");
   
    return {nomeresult, hobbyesResult};
}

const users = finalProfile();
 
   console.log(users);
   

