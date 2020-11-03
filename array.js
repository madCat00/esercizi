const stringhe = ['hello','animali','macchine','colori','alberi'];

function string (stringa1){
    return stringa1.toUpperCase();
}
const input = string(stringhe[2]);
string(input);
console.log(input);
//Non esiste un metodo che prende l'array e lo restituisce in maiuscolo.

function addOne(el){
    return el+1;
}

const transformed = stringhe.map(string).map(addOne);
console.log(transformed);

// metodo map consente di ripetere la funzione all'interno del suo metodo

//return an array number where the result is * 4

const numeri = [1,2,3,4,5,6,7,8,9,0];
function num1(multi){
    return multi * 4;
}

const numeroFinale = numeri.map(num1);
console.log(numeroFinale);

// Array.prototype.mycustommap -> Si può organizzare il nostro codice di modo da poterlo richiamare in un determinata funzione.

//Array con oggetti
/*
const person = [{name:'jhon'},{name:'Marco'}];

function name(myname){
    return myname.toUpperCase;
}

const myperson = name.map(person)
console.log(myperson);
*/

//Due liste di numeri, stampa la somma tra due elementi a caso delle liste

const stringa12 = [1,3,4,6,8,5,8,9,{ animali:'cani' }];
const stringa10 = [1,4,5,7,5,7,4,5];

function sumString(num7, num8){
    var somma = num7 + num8;
    return somma;
}

const valore = sumString(stringa12[4], stringa10[3]);
console.log(valore);

