const el = document.getElementsByTagName('body')[0];

function myfunc() {
    let myvar = prompt();
     window.alert(myvar);
     myvar = myvar.toUpperCase();
     let elSecond = document.getElementById('prova1');
     elSecond.innerText = myvar;
}

el.addEventListener('load',myfunc());
