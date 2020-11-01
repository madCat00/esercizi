//Excercise 1: Create a function to return a paw number

function paw(base,esponente){       //A simple paw function that pass the arguments base and exponent
    return (base ** esponente);     
}

const mostra = paw(10,2);   //Give the values at my function 
document.getElementById('paw1').innerText = 'The first paw number is'+' '+mostra; // View the result 

//Second method without the instruction **

function mypaw(base,esponente){

    if( esponente === 0){       //Check the input values
        window.alert("L'esponente è uguale a 0, il risultato sarà sampre 1"); //Give the message to users
    }
for ( i=0; i<esponente; i++){           //Calc the paw number
  return  calcolo = (base * base);
}
}

const mostra2 = mypaw(17,2);
document.getElementById('paw2').innerText = 'The second paw number is'+' '+mostra2;      //See the result

//Exercise 2: Create a function to print my age.

//First method 

function age(myage){
   return document.getElementById('età').innerText = myage; 
}

age(33);

//Second method : create an object with literal mode

let anni = {
     eta:44,
     mostraEta: function () {   //Create a method to return my age
     return this.eta;
    }
}

const mostra3 = anni.mostraEta();
document.getElementById('età2').innerText= 'Mostro età con notazione letterale'+ ' '+ mostra3;

//Third method : Create an object with constructor mode 

var myanni = new Object();

myanni.eta = 55;
myanni.provincia = 'Arezzo';
myanni.sex = 'Male';

function age2() {
    const visualizza =  myanni[eta]; //Different method to access the element
    document.getElementById('età3').innerText = visualizza;
}
document.getElementById('età3').innerText = 'Mostro età con notazione a costruttore' + ' ' + myanni.eta;


//Excercise 3 : Create a function to concat two string

function unisci ( stringa1,stringa2){
    const unione = stringa1+ ' '+stringa2;
    return unione;
}

const View1 = unisci('hello','I m Francesco');
document.getElementById('stringa1').innerText = 'Mostro unione delle stringhe'+' '+View1;

//Method2 : Use concact method

function mystring(stringa1,stringa2){
const mystring='';
const unione = mystring.concat(stringa1+' '+stringa2);
return document.getElementById('stringa2').innerText = unione;
}

var mostra6 = mystring('Unione di stringhe'+' '+'Con metodo concat');