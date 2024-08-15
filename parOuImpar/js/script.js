const form = document.querySelector("form");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function (e) {
  const numero = parseFloat(form.innumero.value);

  if (isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
    resposta.innerText = "Numero invalido";
  } else {
    if (numero % 2 === 0) {
      resposta.innerText = `O número ${numero} é par`;
    } else {
      resposta.innerText = `O número ${numero} é ímpar`;
    }
  }

  e.preventDefault();
});
