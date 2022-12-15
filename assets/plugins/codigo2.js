
const element = document.getElementById("nodopadre");
const primer = element.firstChild;
console.log(primer);
console.log(primer.nodeName); 

function funcion2() {
    var h = document.getElementById("section-1");
    var g = h.getElementsByTagName("BUTTON")[0];
    var f = g.childNodes[0].nodeValue;
    document.getElementById("texto3").innerHTML = f;
}