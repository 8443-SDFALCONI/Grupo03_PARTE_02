function adjuntar1() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Se agregó este elemento con appendChild");
    node.appendChild(textnode);
    document.getElementById("gfg").appendChild(node);
}


let menu = document.getElementById('menu');
let li = document.createElement('li');
li.textContent = 'Elemento Nuevo';
menu.insertBefore(li, menu.firstElementChild);    