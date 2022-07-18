let compteurTirage = 0;
const tirageMini = 100;
let nombreRandom;
let tableauTirage = [];

console.log(tableauTirage);

//initialisation d'un tableau vide de 0 à 100
for (let i = 0; i < 100; i++) {
    tableauTirage.push("");
}

while (tableauTirage.indexOf('') > -1) {
    compteurTirage++;
    nombreRandom = Math.floor(Math.random() * 100);
    console.log(nombreRandom);
    if (tableauTirage.indexOf(nombreRandom) > -1) {
    } else {
        tableauTirage[nombreRandom] = nombreRandom;
    }
}

console.log("le nombre de tirage nécessaire est de %s ", compteurTirage);
console.log(tableauTirage);

//exercice 2

let phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens"
let tab = [];
phrase = phrase.replace(/ /g, '');
console.log(phrase);
tab = phrase.split('');
console.log(tab.sort());
