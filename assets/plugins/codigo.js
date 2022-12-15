var id = null;
function movimiento1() {
var circulo1 = document.querySelector("#circulo1");
var button = document.querySelector("#mover1");
    button.addEventListener("click", animate, false);
    var xPos = 0;
    clearInterval(id);
    id = setInterval(animate, 10);
    function animate() {
        xPos += 10;
        circulo1.style.transform = `translate3d(${xPos}px, 0, 0)`;
        if (Math.abs(xPos) >= 900) {
          xPos = -500;
        }
    }

    var button2 = document.querySelector("#parar1");
    button2.addEventListener("click", parar, false);
    function parar(){
      clearInterval(id);
    }
  }


  function saludo1() {
    alert("Grupo 03")
}


function mouse1() {
  const contenedor2 = document.getElementById("contenedor2");
  contenedor2.innerHTML = "Acercaste el mouse";
}            
function mouse2() {
  const contenedor2 = document.getElementById("contenedor2");
  contenedor2.innerHTML = "Alejaste el mouse";
}     

function evento() {
  document.all.img1.width = 500;
  document.all.img1.height = 500;
}

document.getElementById("botonlistener").addEventListener("click", function(){
	document.getElementById("texto1").innerText = "El texto aparece con EventListener";
});



const x = document.getElementById("clickIt");
const y = document.getElementById("hoverPara");
x.addEventListener("click", RespondClick);
y.addEventListener("mouseover", RespondMouseOver);
y.addEventListener("mouseout", RespondMouseOut);

function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
                "Evento de MouseOver" + "<br>";
}

function RespondMouseOut() {
    document.getElementById("effect").innerHTML +=
              "Evento de MouseOut" + "<br>";
}

function RespondClick() {
    document.getElementById("effect").innerHTML +=
              "Evento de Click" + "<br>";
}
