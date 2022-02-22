
function votado(){
    var b1 = document.getElementById("botao1");
    var b2 = document.getElementById("botao2");
    var b3 = document.getElementById("botao3");
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    
}
function votar(){
    let newdiv = document.getElementById("grates");
    let newtext = document.createTextNode ("Thanks for voting!");

    newdiv.appendChild(newtext);
    votado();
}
