var a = document.getElementById("a");
a.innerHTML = "Los elementos son : "
function funcion1(){
    var parentNode = document.createElement("div");
    var c1 = document.createElement("p");
    var c2 = document.createElement("span");
    var c3 = document.createElement("h1");
    parentNode.appendChild(c1);
    parentNode.appendChild(c2);
    parentNode.appendChild(c3);
    var nodelist = parentNode.childNodes;

    for(var values of nodelist.values()) {
        console.log(values);
        a.innerHTML += "<li>"+values.localName + `</li>`;
    }
    console.log(nodelist.values())
}