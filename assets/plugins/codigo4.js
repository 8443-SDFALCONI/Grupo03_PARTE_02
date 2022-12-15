let boton = document.getElementById('contarbtn');
boton.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h4');
    alert(`El número de etiquetas h4 en la sección contenedor4 es: ${headings.length}`);
});