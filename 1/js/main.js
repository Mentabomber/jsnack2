// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

// "auto1", "auto2", "auto3", "auto4", "auto5", "auto6", "auto7", "auto8", "auto9", "auto10"
let carListBenzina = [];
let carListDiesel = [];
let carListRest = [];
const carList = [
    auto1 = {

        "marca" :  "VolksWagen",
        "modello" : "r-12",
        alimentazione : "benzina",
        
    }
    ,
    auto2 = {

        "marca" :  "Fiat",
        "modello" : "500",
        alimentazione : "benzina",
        
    }
    ,    
    auto3 = {

        "marca" :  "Mercedes",
        "modello" : "monca-s",
        alimentazione : "diesel",
        
    }
    ,
    auto4 = {

        "marca" :  "Toyota",
        "modello" : "arris",
        alimentazione : "metano",
        
    }
    ,
    auto5 = {

        "marca" :  "Tesla",
        "modello" : "am-13",
        alimentazione : "elettrico",
        
    }
    ,
    auto6 = {

        "marca" :  "VolksWagen",
        "modello" : "barrens",
        alimentazione : "gpl",
        
    }
    ,
    auto7 = {

        "marca" :  "VolksWagen",
        "modello" : "r-12",
        alimentazione : "benzina",
        
    }
    ,
    auto8 = {

        "marca" :  "VolksWagen",
        "modello" : "r-12",
        alimentazione : "benzina",
        
    }
    ,
    auto9 = {

        "marca" :  "VolksWagen",
        "modello" : "r-12",
        alimentazione : "benzina",
        
    }
    ,
    auto10 = {

        "marca" :  "VolksWagen",
        "modello" : "r-12",
        alimentazione : "benzina",
        
    }
];

carListBenzina = carList.filter(carList => carList.alimentazione === "benzina");

console.log(carListBenzina);

carListDiesel = carList.filter(carList => carList.alimentazione === "diesel");

console.log(carListDiesel);

carListRest =  carList.filter(carList => (carList.alimentazione !== "benzina")&&(carList.alimentazione !== "diesel"));

console.log(carListRest);
// const newCarObj = {

//     "marca" :  ,
//     "modello" : ,
//     "alimentazione" : ,
    
// };


