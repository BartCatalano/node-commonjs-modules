
// richiamo la funzione del nome tramite il require
const nome = require(`./name`);

// richiamo la funzione segli hobbie tramite il require

const hobbies = require(`./hobbie`);

// creo la funzione finale

function finalProfile (){
    // uso la funzione nome
    const nomeresult = nome.nomeFull("firstname"," lastname");
   // uso la funzione hobby
    const hobbiesResult = hobbies.hobbiesFull("hobbyOne"," hobbyTwo"," hobbyThree");
   
    return {nomeresult, hobbiesResult};
}

const users = finalProfile();
 
   console.log(users);
   

