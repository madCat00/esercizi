
//Check 

var mountains = "        Monte Falco, 1658, Parco Foreste Casentinesi ; Monte Falterona, 1654, Parco Foreste Casentinesi           ";

function splittato(array){
     const diviso = array.split(';');
     return diviso;
}

function noSpace(noSpazio){
    return noSpazio.trim();
}

function arrToObject(oggetto){
    const dividi = oggetto.split(', ');
    const myObject = {
        name: dividi[0],
        age:dividi[1],
        place: dividi[2],
    }
    return myObject;
}

const myarray = splittato(mountains).map(noSpace).map(arrToObject);
console.log(myarray);





const città = ['Florence is a beatufil city','Arezzo is second to none','Siena ha la torre del Mangia','Lucca è lontana da Arezzo'];

function cerca(array){
      let trova =  array.split(',');
      let nuovoArray = array.match();
      let florence = array.match(/Florence/g);
      let arezzo = array.match(/Arezzo/g);
      let siena = array.match(/Siena/g);
      let lucca = array.match(/Lucca/g);
      nuovoArray += nuovoArray.push(florence,arezzo,siena,lucca);
      return nuovoArray;
}






