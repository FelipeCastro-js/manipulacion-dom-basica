const h1 = document.querySelector('h1');
const formulario = document.querySelector('#form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');


formulario.addEventListener('submit', sumarFormulario);

function sumarFormulario(event) {
    //no recargue la pagina
    event.preventDefault();
    let resultadoSuma = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "El resultado de la suma es -> " + resultadoSuma;
}