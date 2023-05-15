// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

let newPeopleList = [];

const peopleList = [
    {

        "nome" :  "Marco",
        "cognome" : "Bianchi",
        eta : "16",
        
    }
    ,
    {

        "nome" :  "Giacomo",
        "cognome" : "Rossi",
        eta : "22",
        
    }
    ,    
    {

        "nome" :  "Fabio",
        "cognome" : "Verdi",
        eta : "54",
        
    }
    ,
    {

        "nome" :  "Gennaro",
        "cognome" : "Marrone",
        eta : "40",
        
    }
    ,
    {

        "nome" :  "Sebastiano",
        "cognome" : "Viola",
        eta : "12",
        
    }
    ,
    {

        "nome" :  "Fabrizio",
        "cognome" : "Gialli",
        eta : "20",
        
    }
    ,
    {

        "nome" :  "Matteo",
        "cognome" : "Prugna",
        eta : "18",
        
    }
    ,
    {

        "nome" :  "Caloggero",
        "cognome" : "Frizzanti",
        eta : "33",
        
    }
    ,
    {

        "nome" :  "Martino",
        "cognome" : "Freschi",
        eta : "26",
        
    }
    ,
    {

        "nome" :  "Mario",
        "cognome" : "Primo",
        eta : "66",
        
    }
];

newPeopleList = peopleList.map((persona) => {
   if(parseInt(persona.eta) >= 18){
    return persona.nome + " " + persona.cognome + " può guidare";
   }
   else{
    return persona.nome + " " + persona.cognome +" non può guidare";
   }
    
});

console.log(newPeopleList);

// newPeopleList = peopleList.map((peopleList.eta) => {
//        if(peopleList.eta >= 18){
//     return peopleList.nome + peopleList.cognome +"può guidare";
//    }
//    else{
//     return peopleList.nome + peopleList.cognome +"non può guidare";
//    }
    
// }  ) 
//  console.log(newPeopleList);

